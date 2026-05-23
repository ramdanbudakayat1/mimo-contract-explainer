import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MiMo Smart Contract Explainer',
  description: 'AI-powered Solidity contract analysis and risk assessment tool',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'MiMo Smart Contract Explainer',
    description: 'Analyze Solidity contracts for vulnerabilities and risks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiMo Smart Contract Explainer',
    description: 'AI-powered Solidity contract analysis',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-950 to-slate-900`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-4 py-8 md:px-8 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
