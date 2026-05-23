interface SummaryCardProps {
  summary: {
    name: string
    type: string
    lines: number
    functions: number
    riskScore: number
  }
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  const getRiskBadge = (score: number) => {
    if (score >= 8) {
      return { label: 'Critical', class: 'badge-critical' }
    }
    if (score >= 6) {
      return { label: 'High', class: 'badge-high' }
    }
    if (score >= 4) {
      return { label: 'Medium', class: 'badge-medium' }
    }
    return { label: 'Low', class: 'badge-low' }
  }

  const risk = getRiskBadge(summary.riskScore)

  return (
    <div className="card animate-fade-in">
      <h2 className="mb-6 text-2xl font-semibold text-white">📊 Contract Summary</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-sm text-slate-400">Contract Name</div>
          <div className="mt-1 text-xl font-semibold text-white">{summary.name}</div>
        </div>
        
        <div>
          <div className="text-sm text-slate-400">Type</div>
          <div className="mt-1 text-xl font-semibold text-white">{summary.type}</div>
        </div>
        
        <div>
          <div className="text-sm text-slate-400">Lines of Code</div>
          <div className="mt-1 text-xl font-semibold text-white">{summary.lines}</div>
        </div>
        
        <div>
          <div className="text-sm text-slate-400">Functions</div>
          <div className="mt-1 text-xl font-semibold text-white">{summary.functions}</div>
        </div>
      </div>
      
      <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-white">Risk Score</span>
          <span className={`badge ${risk.class} text-lg`}>
            {risk.label} ({summary.riskScore}/10)
          </span>
        </div>
      </div>
    </div>
  )
}
