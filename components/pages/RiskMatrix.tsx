'use client'

import { useState } from 'react'

interface Risk {
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  location: { line: number; function: string }
}

interface RiskMatrixProps {
  risks: Risk[]
}

export default function RiskMatrix({ risks }: RiskMatrixProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const groupedRisks = {
    critical: risks.filter((r) => r.severity === 'critical'),
    high: risks.filter((r) => r.severity === 'high'),
    medium: risks.filter((r) => r.severity === 'medium'),
    low: risks.filter((r) => r.severity === 'low'),
  }

  const severityConfig = {
    critical: { icon: '🔴', label: 'CRITICAL', class: 'badge-critical' },
    high: { icon: '🟠', label: 'HIGH', class: 'badge-high' },
    medium: { icon: '🟡', label: 'MEDIUM', class: 'badge-medium' },
    low: { icon: '🟢', label: 'LOW', class: 'badge-low' },
  }

  return (
    <div className="card animate-fade-in">
      <h2 className="mb-6 text-2xl font-semibold text-white">🚨 Security Risks</h2>
      
      <div className="space-y-6">
        {Object.entries(groupedRisks).map(([severity, riskList]) => {
          if (riskList.length === 0) {
            return null
          }
          
          const config = severityConfig[severity as keyof typeof severityConfig]
          
          return (
            <div key={severity}>
              <div className="mb-3 flex items-center space-x-2">
                <span className="text-2xl">{config.icon}</span>
                <span className={`badge ${config.class}`}>{config.label}</span>
                <span className="text-slate-400">({riskList.length})</span>
              </div>
              
              <div className="space-y-2">
                {riskList.map((risk, index) => {
                  const globalIndex = risks.indexOf(risk)
                  const isExpanded = expandedIndex === globalIndex
                  
                  return (
                    <div
                      key={globalIndex}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-slate-600"
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{risk.title}</h4>
                            <div className="mt-1 text-sm text-slate-400">
                              Line {risk.location.line} • {risk.location.function}()
                            </div>
                          </div>
                          <svg
                            className={`h-5 w-5 text-slate-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
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
                      
                      {isExpanded && (
                        <div className="mt-4 border-t border-slate-700 pt-4">
                          <p className="text-slate-300">{risk.description}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
