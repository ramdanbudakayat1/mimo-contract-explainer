'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface FlowDiagramProps {
  diagram: string
}

export default function FlowDiagram({ diagram }: FlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && diagram) {
      mermaid.initialize({ theme: 'dark', startOnLoad: true })
      mermaid.contentLoaded()
    }
  }, [diagram])

  return (
    <div className="card animate-fade-in">
      <h2 className="mb-6 text-2xl font-semibold text-white">🔄 Contract Flow</h2>
      
      <div
        ref={containerRef}
        className="flex justify-center overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/50 p-6"
      >
        <div className="mermaid">{diagram}</div>
      </div>
      
      <div className="mt-4 flex space-x-3">
        <button className="button-secondary flex-1 py-2 text-sm">
          📥 Download SVG
        </button>
        <button className="button-secondary flex-1 py-2 text-sm">
          📋 Copy Mermaid Code
        </button>
      </div>
    </div>
  )
}
