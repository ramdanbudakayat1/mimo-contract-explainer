'use client'

interface AnalysisResult {
  summary?: {
    name: string
    type: string
    lines: number
    functions: number
    riskScore: number
  }
  risks?: Array<{
    severity: string
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

interface ExportPanelProps {
  result: AnalysisResult
}

export default function ExportPanel({ result }: ExportPanelProps) {
  const generateMarkdown = () => {
    let markdown = `# Smart Contract Analysis Report

## Summary
- **Name:** ${result.summary?.name || 'Unknown'}
- **Type:** ${result.summary?.type || 'Unknown'}
- **Lines:** ${result.summary?.lines || 0}
- **Functions:** ${result.summary?.functions || 0}
- **Risk Score:** ${result.summary?.riskScore || 0}/10

## Risks Detected
${result.risks?.map((r) => `- **${r.severity.toUpperCase()}:** ${r.title} (Line ${r.location.line})`).join('\n') || 'No risks detected'}

## Functions
${result.functions?.map((f) => `- \`${f.signature}\` (${f.visibility})`).join('\n') || 'No functions'}

## Owner Privileges
${result.ownerPrivileges?.map((p) => `- ${p}`).join('\n') || 'No special privileges'}
`
    return markdown
  }

  const handleExportMarkdown = () => {
    const markdown = generateMarkdown()
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${result.summary?.name || 'contract'}-analysis.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportJSON = () => {
    const json = JSON.stringify(result, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${result.summary?.name || 'contract'}-analysis.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopyMarkdown = () => {
    const markdown = generateMarkdown()
    navigator.clipboard.writeText(markdown).then(() => {
      alert('Markdown copied to clipboard!')
    })
  }

  return (
    <div className="card animate-fade-in">
      <h2 className="mb-6 text-2xl font-semibold text-white">📥 Export Analysis</h2>
      
      <div className="grid gap-3 md:grid-cols-2">
        <button
          onClick={handleExportMarkdown}
          className="button-primary flex items-center justify-center space-x-2 py-3"
        >
          <span>📄</span>
          <span>Download Markdown</span>
        </button>
        
        <button
          onClick={handleCopyMarkdown}
          className="button-secondary flex items-center justify-center space-x-2 py-3"
        >
          <span>📋</span>
          <span>Copy to Clipboard</span>
        </button>
        
        <button
          onClick={handleExportJSON}
          className="button-secondary flex items-center justify-center space-x-2 py-3"
        >
          <span>📊</span>
          <span>Export JSON</span>
        </button>
        
        <button
          className="button-secondary flex items-center justify-center space-x-2 py-3 opacity-50 cursor-not-allowed"
          disabled
        >
          <span>📑</span>
          <span>Generate PDF (Coming Soon)</span>
        </button>
      </div>
    </div>
  )
}
