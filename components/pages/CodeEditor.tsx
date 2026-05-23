'use client'

import Editor from '@monaco-editor/react'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900">
      <Editor
        height="400px"
        language="sol"
        theme="vs-dark"
        value={value}
        onChange={(newValue) => onChange(newValue || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
        }}
      />
    </div>
  )
}
