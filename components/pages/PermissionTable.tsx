interface Permission {
  function: string
  visibility: string
  modifier: string
  risk: string
}

interface PermissionTableProps {
  permissions: Permission[]
}

export default function PermissionTable({ permissions }: PermissionTableProps) {
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
      <h2 className="mb-6 text-2xl font-semibold text-white">🔐 Access Control</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Function</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Visibility</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Modifier</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">Risk</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm, index) => (
              <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                <td className="px-4 py-3">
                  <code className="font-mono text-sm text-indigo-400">{perm.function}</code>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block rounded bg-slate-700/50 px-2 py-1 text-sm">
                    {perm.visibility}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-300">
                  {perm.modifier || '-'}
                </td>
                <td className="px-4 py-3">
                  <span className={`badge ${getRiskBadge(perm.risk)}`}>
                    {perm.risk.charAt(0).toUpperCase() + perm.risk.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
