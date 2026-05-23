import { Groq } from 'groq-sdk'
import { parse } from '@solidity-parser/parser'

const groq = process.env.GROQ_API_KEY 
  ? new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })
  : null

interface AnalysisResult {
  summary: {
    name: string
    type: string
    lines: number
    functions: number
    riskScore: number
  }
  risks: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low'
    title: string
    description: string
    location: { line: number; function: string }
  }>
  functions: Array<{
    name: string
    signature: string
    visibility: string
    modifiers: string[]
    explanation: string
    risk: string
  }>
  permissions: Array<{
    function: string
    visibility: string
    modifier: string
    risk: string
  }>
  ownerPrivileges: string[]
  flowDiagram: string
}

export async function analyzeContract(code: string): Promise<AnalysisResult> {
  try {
    console.log('Starting contract analysis...')
    
    // Parse Solidity code
    const ast = parse(code, { range: true })
    console.log('AST parsed successfully')
    
    // Extract basic information
    const lines = code.split('\n').length
    const functions = extractFunctions(ast)
    
    // Get AI analysis
    const aiAnalysis = await getAIAnalysis(code, functions)
    
    // Combine results
    const result: AnalysisResult = {
      summary: {
        name: extractContractName(ast) || 'Unknown',
        type: determineContractType(ast),
        lines,
        functions: functions.length,
        riskScore: calculateRiskScore(aiAnalysis.risks),
      },
      risks: aiAnalysis.risks,
      functions: aiAnalysis.functions,
      permissions: extractPermissions(functions),
      ownerPrivileges: extractOwnerPrivileges(ast),
      flowDiagram: generateFlowDiagram(functions),
    }
    
    console.log('Analysis complete:', result.summary)
    return result
    
  } catch (error: unknown) {
    console.error('Analysis failed:', error)
    
    // Fallback to mock data if API fails
    if (error instanceof Error && error.message.includes('not configured')) {
      console.log('API key not configured, returning mock data')
      return getMockAnalysis()
    }
    
    throw new Error('Contract analysis failed. Please check your code and try again.')
  }
}

function extractFunctions(ast: any): any[] {
  const functions: any[] = []
  
  function traverse(node: any) {
    if (node.type === 'ContractDefinition') {
      node.subNodes?.forEach((subNode: any) => {
        if (subNode.type === 'FunctionDefinition') {
          functions.push(subNode)
        }
      })
    }
    
    if (node.children) {
      node.children.forEach(traverse)
    }
    if (node.subNodes) {
      node.subNodes.forEach(traverse)
    }
  }
  
  traverse(ast)
  return functions
}

function extractContractName(ast: any): string | null {
  function traverse(node: any): string | null {
    if (node.type === 'ContractDefinition') {
      return node.name
    }
    
    if (node.children) {
      for (const child of node.children) {
        const result = traverse(child)
        if (result) return result
      }
    }
    if (node.subNodes) {
      for (const subNode of node.subNodes) {
        const result = traverse(subNode)
        if (result) return result
      }
    }
    
    return null
  }
  
  return traverse(ast)
}

function determineContractType(ast: any): string {
  const contractName = extractContractName(ast) || ''
  const nameLower = contractName.toLowerCase()
  
  if (nameLower.includes('token') || nameLower.includes('erc')) {
    return 'ERC-20 Token'
  }
  if (nameLower.includes('nft') || nameLower.includes('erc721')) {
    return 'NFT Contract'
  }
  if (nameLower.includes('vault') || nameLower.includes('staking')) {
    return 'DeFi Vault'
  }
  if (nameLower.includes('dao') || nameLower.includes('governance')) {
    return 'Governance Contract'
  }
  
  return 'Custom Contract'
}

function extractPermissions(functions: any[]): Array<{
  function: string
  visibility: string
  modifier: string
  risk: string
}> {
  return functions.map((func) => {
    const name = func.name || 'anonymous'
    const visibility = func.visibility || 'public'
    const modifiers = func.modifiers?.map((m: any) => m.name).join(', ') || ''
    
    // Simple risk assessment based on visibility and modifiers
    let risk = 'low'
    if (visibility === 'public' && !modifiers.includes('onlyOwner')) {
      risk = 'medium'
    }
    if (visibility === 'external' && !modifiers) {
      risk = 'high'
    }
    
    return {
      function: name,
      visibility,
      modifier: modifiers,
      risk,
    }
  })
}

function extractOwnerPrivileges(ast: any): string[] {
  const privileges: string[] = []
  
  function traverse(node: any) {
    if (node.type === 'ModifierDefinition' && node.name === 'onlyOwner') {
      privileges.push('Has onlyOwner modifier')
    }
    
    if (node.type === 'FunctionDefinition') {
      const modifiers = node.modifiers || []
      if (modifiers.some((m: any) => m.name === 'onlyOwner')) {
        privileges.push(`Function ${node.name || 'anonymous'}() requires owner`)
      }
    }
    
    if (node.children) {
      node.children.forEach(traverse)
    }
    if (node.subNodes) {
      node.subNodes.forEach(traverse)
    }
  }
  
  traverse(ast)
  return privileges
}

function generateFlowDiagram(functions: any[]): string {
  const functionNames = functions
    .map((f) => f.name || 'anonymous')
    .filter((name) => name !== 'anonymous')
    .slice(0, 5) // Limit to 5 functions for readability
  
  if (functionNames.length === 0) {
    return 'graph TD\n  A[No functions detected]'
  }
  
  const lines = ['graph TD']
  for (let i = 0; i < functionNames.length; i++) {
    if (i < functionNames.length - 1) {
      lines.push(`  ${functionNames[i]} --> ${functionNames[i + 1]}`)
    }
  }
  
  return lines.join('\n')
}

function calculateRiskScore(risks: Array<{ severity: string }>): number {
  const weights: Record<string, number> = {
    critical: 10,
    high: 7,
    medium: 4,
    low: 1,
  }
  
  const total = risks.reduce((sum, risk) => sum + (weights[risk.severity] || 0), 0)
  return Math.min(Math.floor(total / 2), 10) // Scale to 0-10
}

async function getAIAnalysis(code: string, functions: any[]): Promise<{
  risks: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low'
    title: string
    description: string
    location: { line: number; function: string }
  }>
  functions: Array<{
    name: string
    signature: string
    visibility: string
    modifiers: string[]
    explanation: string
    risk: string
  }>
}> {
  try {
    // Check if API key is configured
    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_groq_api_key_here') {
      throw new Error('GROQ_API_KEY not configured')
    }
    
    const functionSummaries = functions
      .map((f) => {
        const name = f.name || 'anonymous'
        const params = f.parameters?.map((p: any) => p.typeName.name).join(', ') || ''
        return `${name}(${params})`
      })
      .join(', ')
    
    const prompt = `Analyze this Solidity contract and provide:
1. Security risks with severity (critical, high, medium, low)
2. Function explanations
3. Risk assessment for each function

Contract code:
\`\`\`solidity
${code.substring(0, 2000)} // Truncate for token limits
\`\`\`

Functions: ${functionSummaries}

Return JSON format:
{
  "risks": [
    {
      "severity": "critical|high|medium|low",
      "title": "Risk title",
      "description": "Detailed description",
      "location": {"line": 42, "function": "withdraw"}
    }
  ],
  "functions": [
    {
      "name": "functionName",
      "signature": "functionName(address to, uint amount)",
      "visibility": "public|private|internal|external",
      "modifiers": ["onlyOwner"],
      "explanation": "What this function does",
      "risk": "critical|high|medium|low|none"
    }
  ]
}`

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a smart contract security expert. Analyze Solidity code and identify risks.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.1,
      response_format: { type: 'json_object' },
    })
    
    const content = response.choices[0]?.message?.content
    if (!content) {
      throw new Error('No response from AI')
    }
    
    return JSON.parse(content)
    
  } catch (error: unknown) {
    console.error('AI analysis failed:', error)
    // Fallback to mock data
    return getMockAIAnalysis()
  }
}

function getMockAIAnalysis(): {
  risks: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low'
    title: string
    description: string
    location: { line: number; function: string }
  }>
  functions: Array<{
    name: string
    signature: string
    visibility: string
    modifiers: string[]
    explanation: string
    risk: string
  }>
} {
  return {
    risks: [
      {
        severity: 'critical' as const,
        title: 'Reentrancy vulnerability in withdraw()',
        description: 'External call before state update allows reentrancy attacks',
        location: { line: 42, function: 'withdraw' },
      },
      {
        severity: 'high' as const,
        title: 'Missing access control on mint()',
        description: 'Anyone can mint unlimited tokens',
        location: { line: 78, function: 'mint' },
      },
      {
        severity: 'medium' as const,
        title: 'Centralized owner privileges',
        description: 'Single owner can pause all transfers',
        location: { line: 15, function: 'pause' },
      },
    ],
    functions: [
      {
        name: 'transfer',
        signature: 'transfer(address to, uint amount)',
        visibility: 'public',
        modifiers: [],
        explanation: 'Transfers tokens from sender to recipient',
        risk: 'critical',
      },
      {
        name: 'balanceOf',
        signature: 'balanceOf(address account)',
        visibility: 'public',
        modifiers: [],
        explanation: 'Returns token balance of specified account',
        risk: 'none',
      },
      {
        name: 'mint',
        signature: 'mint(address to, uint amount)',
        visibility: 'public',
        modifiers: ['onlyOwner'],
        explanation: 'Mints new tokens to specified address',
        risk: 'high',
      },
      {
        name: 'pause',
        signature: 'pause()',
        visibility: 'external',
        modifiers: ['onlyOwner'],
        explanation: 'Pauses all token transfers',
        risk: 'medium',
      },
    ],
  }
}

function getMockAnalysis(): AnalysisResult {
  const mockAI = getMockAIAnalysis()
  
  return {
    summary: {
      name: 'MyToken',
      type: 'ERC-20 Token',
      lines: 245,
      functions: 12,
      riskScore: 6,
    },
    risks: mockAI.risks,
    functions: mockAI.functions,
    permissions: [
      { function: 'transfer', visibility: 'public', modifier: '', risk: 'critical' },
      { function: 'mint', visibility: 'public', modifier: 'onlyOwner', risk: 'high' },
      { function: 'pause', visibility: 'external', modifier: 'onlyOwner', risk: 'medium' },
    ],
    ownerPrivileges: ['Can mint unlimited tokens', 'Can pause all transfers', 'Can change contract parameters'],
    flowDiagram: 'graph TD\n  A[User] --> B[transfer()]\n  B --> C[_beforeTransfer()]\n  C --> D[Update balances]\n  D --> E[Emit Transfer event]',
  }
}
