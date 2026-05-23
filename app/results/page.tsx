'use client'

import { useEffect, useState } from 'react'
import SummaryCard from '@/components/pages/SummaryCard'
import RiskMatrix from '@/components/pages/RiskMatrix'
import FunctionBreakdown from '@/components/pages/FunctionBreakdown'
import PermissionTable from '@/components/pages/PermissionTable'
import FlowDiagram from '@/components/pages/FlowDiagram'
import ExportPanel from '@/components/pages/ExportPanel'
import { useRouter } from 'next/navigation'

interface AnalysisResult {
  summary?: {
    name: string
    type: string
    lines: number
    functions: number
    riskScore: number
  }
  risks?: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low'
    title: string
    description: string
    location: { line: number; function: string }
  }>
  functions?: Array<{
    name: string
    signature: string
    visibility: string
    modifiers: string[]
    explanation: string
    risk: string
  }>
  permissions?: Array<{
    function: string
    visibility: string
    modifier: string
    risk: string
  }>
  ownerPrivileges?: string[]
  flowDiagram?: string
}

export default function ResultsPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const stored = sessionStorage.getItem('analysisResult')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        console.log('Loaded from sessionStorage:', parsed)
        console.log('Data structure:', {
          hasSummary: !!parsed.summary,
          hasRisks: !!parsed.risks,
          hasFunctions: !!parsed.functions,
          summaryKeys: parsed.summary ? Object.keys(parsed.summary) : [],
          risksCount: parsed.risks ? parsed.risks.length : 0,
        })
        setResult(parsed)
      } catch (err) {
        console.error('Failed to parse stored result:', err)
      }
    } else {
      // Fallback: check URL parameters for mock data
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('mock') === 'true') {
        console.log('Loading mock data for testing')
        setResult(getMockData())
      } else {
        console.log('No analysis data found, redirecting to home')
        router.push('/')
      }
    }
    setLoading(false)
  }, [router])

  const getMockData = (): AnalysisResult => {
    return {
      summary: {
        name: 'MyToken',
        type: 'ERC-20 Token',
        lines: 245,
        functions: 12,
        riskScore: 6,
      },
      risks: [
        {
          severity: 'critical',
          title: 'Reentrancy vulnerability in withdraw()',
          description: 'External call before state update allows reentrancy attacks',
          location: { line: 42, function: 'withdraw' },
        },
        {
          severity: 'high',
          title: 'Missing access control on mint()',
          description: 'Anyone can mint unlimited tokens',
          location: { line: 78, function: 'mint' },
        },
        {
          severity: 'medium',
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
      ],
      permissions: [
        { function: 'transfer', visibility: 'public', modifier: '', risk: 'critical' },
        { function: 'mint', visibility: 'public', modifier: 'onlyOwner', risk: 'high' },
        { function: 'pause', visibility: 'external', modifier: 'onlyOwner', risk: 'medium' },
      ],
      ownerPrivileges: ['Can mint unlimited tokens', 'Can pause all transfers', 'Can change contract parameters'],
      flowDiagram: 'graph TD
  A[User] --> B[transfer()]
  B --> C[_beforeTransfer()]
  C --> D[Update balances]
  D --> E[Emit Transfer event]',
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="text-slate-300">Loading analysis results...</p>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold text-white">No Analysis Data Found</h2>
          <p className="mb-6 text-slate-300">Please analyze a contract first</p>
          <button
            onClick={() => router.push('/')}
            className="button-primary px-6 py-3"
          >
            Go Back to Analyzer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Analysis Results</h1>
        <p className="mt-2 text-slate-300">
          Complete breakdown of your smart contract analysis
        </p>
      </div>

      <div className="grid gap-6">
        {/* Summary Card */}
        {result.summary && <SummaryCard summary={result.summary} />}

        {/* Risk Matrix */}
        {result.risks && result.risks.length > 0 && <RiskMatrix risks={result.risks} />}

        {/* Function Breakdown */}
        {result.functions && result.functions.length > 0 && (
          <FunctionBreakdown functions={result.functions} />
        )}

        {/* Permission Table */}
        {result.permissions && result.permissions.length > 0 && (
          <PermissionTable permissions={result.permissions} />
        )}

        {/* Owner Privileges */}
        {result.ownerPrivileges && result.ownerPrivileges.length > 0 && (
          <div className="card">
            <h3 className="mb-4 text-2xl font-semibold text-white">⚠️ Owner Privileges</h3>
            <ul className="space-y-2">
              {result.ownerPrivileges.map((privilege, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
                  <span className="text-slate-300">{privilege}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Flow Diagram */}
        {result.flowDiagram && <FlowDiagram diagram={result.flowDiagram} />}

        {/* Export Panel */}
        <ExportPanel result={result} />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => router.push('/')}
          className="button-secondary px-8 py-3"
        >
          Analyze Another Contract
        </button>
      </div>
    </div>
  )
}
