export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center text-slate-400 md:text-left">
            <p>© 2026 MiMo Smart Contract Explainer</p>
            <p className="text-sm">Powered by Groq AI & Solidity Parser</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername/mimo-contract-explainer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a 
              href="https://groq.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Groq
            </a>
            <a 
              href="/LICENSE" 
              className="text-slate-400 transition-colors hover:text-white"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
