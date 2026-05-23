# MiMo Smart Contract Explainer

AI-powered Solidity contract analysis and risk assessment tool.

## Features
- **Smart Contract Analysis** - Paste Solidity code, get instant explanations
- **Risk Detection** - Identify vulnerabilities (reentrancy, overflow, etc.)
- **Permission Mapping** - Visualize access control and owner privileges
- **Flow Visualization** - Generate contract execution diagrams
- **Audit Report Generation** - Export professional markdown reports

## Tech Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components:** Shadcn/ui, Monaco Editor, Mermaid.js
- **Backend:** Next.js API Routes, @solidity-parser/parser
- **AI Integration:** Groq API (Llama 3.3 70B)
- **Hosting:** Netlify (static + serverless functions)

## Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/mimo-contract-explainer.git
cd mimo-contract-explainer

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Groq API key to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mimo-contract-explainer/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page with code editor
│   ├── results/           # Analysis results page
│   └── api/               # API endpoints
├── components/            # React components
│   ├── CodeEditor.tsx     # Monaco editor for Solidity
│   ├── RiskMatrix.tsx     # Risk severity visualization
│   └── FlowDiagram.tsx    # Mermaid.js contract flow
├── lib/                   # Utility functions
│   ├── parser.ts          # Solidity parsing
│   ├── analyzer.ts        # Risk detection logic
│   └── groq.ts            # AI integration
└── public/                # Static assets
```

## API Endpoints

### POST /api/analyze
Analyzes Solidity contract code.

**Request:**
```json
{
  "code": "pragma solidity ^0.8.0; contract MyToken { ... }"
}
```

**Response:**
```json
{
  "summary": {
    "name": "MyToken",
    "type": "ERC-20",
    "lines": 245,
    "functions": 12,
    "riskScore": 6
  },
  "risks": [
    {
      "severity": "critical",
      "title": "Reentrancy vulnerability",
      "description": "...",
      "location": { "line": 42, "function": "withdraw" }
    }
  ],
  "functions": [...],
  "permissions": [...],
  "flowDiagram": "graph TD; A-->B; ..."
}
```

## Environment Variables

```bash
# Required
GROQ_API_KEY=your_groq_api_key_here

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MiMo Contract Explainer
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main

### Vercel
1. Import repository to Vercel
2. Configure environment variables
3. Deploy with zero configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Solidity Parser](https://github.com/solidity-parser/parser) for contract parsing
- [Groq](https://groq.com/) for AI inference
- [Mermaid.js](https://mermaid.js.org/) for diagram generation
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing
