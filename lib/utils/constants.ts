export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'MiMo Contract Explainer'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const SEVERITY_COLORS = {
  critical: 'bg-red-500/20 text-red-400',
  high: 'bg-orange-500/20 text-orange-400',
  medium: 'bg-yellow-500/20 text-yellow-400',
  low: 'bg-green-500/20 text-green-400',
  none: 'bg-slate-500/20 text-slate-400',
}

export const SEVERITY_ICONS = {
  critical: '🔴',
  high: '🟠',
  medium: '🟡',
  low: '🟢',
  none: '⚪',
}

export const SAMPLE_CONTRACTS = [
  {
    id: 'simple-erc20',
    name: 'Simple ERC-20 Token',
    description: 'Basic token implementation with standard functions',
  },
  {
    id: 'vulnerable-token',
    name: 'Vulnerable Token',
    description: 'Contains reentrancy vulnerability for testing',
  },
  {
    id: 'ownable-contract',
    name: 'Ownable Contract',
    description: 'Shows centralized owner privileges',
  },
]
