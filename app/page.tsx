'use client'

import { useState } from 'react'
import CodeEditor from '@/components/pages/CodeEditor'
import SampleSelector from '@/components/pages/SampleSelector'
import { analyzeContract } from '@/lib/api/analyze'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError('Please paste some Solidity code first')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Call API endpoint instead of direct function
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }
      
      const result = await response.json()
      
      // Store in session storage for results page
      sessionStorage.setItem('analysisResult', JSON.stringify(result))
      
      // Redirect to results page
      router.push('/results')
    } catch (err: unknown) {
      console.error('Analysis failed:', err)
      setError(err instanceof Error ? err.message : 'Analysis failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSampleSelect = (sampleCode: string) => {
    setCode(sampleCode)
    setError('')
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
          MiMo Smart Contract Explainer
        </h1>
        <p className="text-xl text-slate-300">
          Paste Solidity code. Get instant AI-powered analysis of functions, risks, and permissions.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Input */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Paste Solidity Code
            </h2>
            <SampleSelector onSelect={handleSampleSelect} />
            <div className="mt-4">
              <CodeEditor value={code} onChange={setCode} />
            </div>
            {error && (
              <div className="mt-4 rounded-lg bg-red-500/20 p-4 text-red-400">
                {error}
              </div>
            )}
            <button
              onClick={handleAnalyze}
              disabled={loading || !code.trim()}
              className="button-primary mt-6 w-full py-3 text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Analyze Contract'
              )}
            </button>
          </div>

          {/* Features Preview */}
          <div className="card">
            <h3 className="mb-4 text-xl font-semibold text-white">What You'll Get</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="mr-3 rounded-full bg-emerald-500/20 p-1">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Function explanations in plain language
              </li>
              <li className="flex items-center">
                <div className="mr-3 rounded-full bg-amber-500/20 p-1">
                  <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                Risk assessment with severity levels
              </li>
              <li className="flex items-center">
                <div className="mr-3 rounded-full bg-blue-500/20 p-1">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                Permission mapping and owner privileges
              </li>
              <li className="flex items-center">
                <div className="mr-3 rounded-full bg-purple-500/20 p-1">
                  <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Contract flow visualization
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="mb-4 text-xl font-semibold text-white">Sample Analysis Preview</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-white">Contract Summary</span>
                  <span className="badge badge-medium">Medium Risk</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <div className="text-slate-400">Type</div>
                    <div>ERC-20 Token</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Functions</div>
                    <div>12</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Lines</div>
                    <div>245</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Owner</div>
                    <div>Centralized</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <div className="mb-2 font-medium text-white">Detected Risks</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Reentrancy vulnerability</span>
                    <span className="badge badge-critical">Critical</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Missing access control</span>
                    <span className="badge badge-high">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Centralized privileges</span>
                    <span className="badge badge-medium">Medium</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <div className="mb-2 font-medium text-white">Export Options</div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="button-secondary py-2 text-sm">Markdown Report</button>
                  <button className="button-secondary py-2 text-sm">JSON Data</button>
                  <button className="button-secondary py-2 text-sm">Audit Notes</button>
                  <button className="button-secondary py-2 text-sm">Flow Diagram</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="card">
            <h3 className="mb-4 text-xl font-semibold text-white">Powered By</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center rounded-lg bg-slate-800/50 p-4">
                <div className="mb-2 text-2xl">⚡</div>
                <div className="text-sm font-medium">Groq AI</div>
                <div className="text-xs text-slate-400">Llama 3.3 70B</div>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-800/50 p-4">
                <div className="mb-2 text-2xl">🔍</div>
                <div className="text-sm font-medium">Solidity Parser</div>
                <div className="text-xs text-slate-400">AST Analysis</div>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-slate-800/50 p-4">
                <div className="mb-2 text-2xl">🛡️</div>
                <div className="text-sm font-medium">Security Rules</div>
                <div className="text-xs text-slate-400">10+ Patterns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
