'use client'

import { useState } from 'react'

interface Function {
  name: string
  signature: string
  visibility: string
  modifiers: string[]
  explanation: string
  risk: string
}

interface FunctionBreakdownProps {
  functions: Function[]
}

export default function FunctionBreakdown({ functions }: FunctionBreakdownProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const getRiskBadge = (risk: string) => {
    const riskMap: Record<string, string> = {
      critical: 'badge-critical',
      high: 'badge-high',
      medium: 'badge-medium',
      low: 'badge-low',
      none: 'badge-low',
    }
    return riskMap[risk] || 'badge-low'
  }

  return (
    <div className="card animate-fade-in">
      <h2 className="mb-6 text-2xl font-semibold text-white">⚙️ Functions ({functions.length})</h2>
      
      <div className="space-y-3">
        {functions.map((func, index) => (
          <div
            key={index}
            className="rounded-lg border border-slate-700 bg-slate-800/50 transition-all hover:border-slate-600"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-4 text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <code className="font-mono text-sm font-semibold text-indigo-400">
                      {func.name}()
                    </code>
                    <span className={`badge ${getRiskBadge(func.risk)}`}>
                      {func.risk.charAt(0).toUpperCase() + func.risk.slice(1)}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    <span className="inline-block rounded bg-slate-700/50 px-2 py-1 mr-2">
                      {func.visibility}
                    </span>
                    {func.modifiers.length > 0 && (
                      <span className="inline-block rounded bg-slate-700/50 px-2 py-1">
                        {func.modifiers.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
                <svg
                  className={`h-5 w-5 text-slate-400 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            
            {expandedIndex === index && (
              <div className="border-t border-slate-700 p-4">
                <div className="mb-4">
                  <div className="text-sm font-medium text-slate-300">Signature</div>
                  <code className="mt-2 block rounded bg-slate-900 p-3 font-mono text-sm text-slate-100">
                    {func.signature}
                  </code>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-300">Explanation</div>
                  <p className="mt-2 text-slate-300">{func.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
