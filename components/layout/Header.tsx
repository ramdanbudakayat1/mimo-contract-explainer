'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold text-white">MiMo Contract Explainer</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-slate-300 transition-colors hover:text-white"
          >
            Analyze
          </Link>
          <a 
            href="https://github.com/yourusername/mimo-contract-explainer" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
