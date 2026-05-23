     1|# MiMo Smart Contract Explainer - Design Document
     2|
     3|## Visual Identity
     4|
     5|**Brand Colors:**
     6|- Primary: `#6366f1` (Indigo) - Trust, security
     7|- Secondary: `#8b5cf6` (Purple) - AI intelligence
     8|- Accent: `#ec4899` (Pink) - Highlights, CTAs
     9|- Success: `#10b981` (Green) - Safe patterns
    10|- Warning: `#f59e0b` (Amber) - Medium risks
    11|- Danger: `#ef4444` (Red) - Critical vulnerabilities
    12|- Neutral: `#64748b` (Slate) - Text, borders
    13|
    14|**Typography:**
    15|- Headings: `Inter` (700 weight)
    16|- Body: `Inter` (400, 500 weight)
    17|- Code: `JetBrains Mono` (monospace)
    18|
    19|**Logo Concept:**
    20|- MiMo mascot with magnifying glass examining code
    21|- Gradient shield icon (security theme)
    22|- Tagline: "Smart Contract Intelligence"
    23|
    24|---
    25|
    26|## Information Architecture
    27|
    28|```
    29|/
    30|├── Hero Section
    31|│   ├── Headline + Subheadline
    32|│   ├── CTA: "Analyze Contract"
    33|│   └── Sample Contracts Dropdown
    34|│
    35|├── Input Section
    36|│   ├── Code Editor (Monaco)
    37|│   ├── File Upload Button
    38|│   └── Analyze Button
    39|│
    40|├── Results Dashboard (appears after analysis)
    41|│   ├── Summary Card
    42|│   ├── Risk Matrix
    43|│   ├── Function Breakdown (accordion)
    44|│   ├── Permission Table
    45|│   ├── Owner Privileges
    46|│   ├── Flow Diagram
    47|│   └── Export Options
    48|│
    49|└── Footer
    50|    ├── About
    51|    ├── GitHub Link
    52|    └── Powered by MiMo + Groq
    53|```
    54|
    55|---
    56|
    57|## Component Specifications
    58|
    59|### 1. Hero Section
    60|
    61|**Layout:**
    62|```
    63|┌─────────────────────────────────────────────┐
    64|│                                             │
    65|│   🛡️ MiMo Smart Contract Explainer         │
    66|│                                             │
    67|│   Understand Solidity contracts in seconds │
    68|│   AI-powered security analysis              │
    69|│                                             │
    70|│   [Analyze Contract →]  [Try Sample ▼]     │
    71|│                                             │
    72|└─────────────────────────────────────────────┘
    73|```
    74|
    75|**Specs:**
    76|- Background: Gradient mesh (indigo → purple)
    77|- Headline: 48px, bold, white
    78|- Subheadline: 20px, regular, white/80%
    79|- CTA Button: Large, rounded, pink accent
    80|- Sample Dropdown: Ghost button, white border
    81|
    82|---
    83|
    84|### 2. Code Input Section
    85|
    86|**Layout:**
    87|```
    88|┌─────────────────────────────────────────────┐
    89|│  Paste Solidity Code                        │
    90|│  ┌───────────────────────────────────────┐  │
    91|│  │ pragma solidity ^0.8.0;               │  │
    92|│  │                                       │  │
    93|│  │ contract MyToken {                    │  │
    94|│  │     mapping(address => uint) balances;│  │
    95|│  │     ...                               │  │
    96|│  │                                       │  │
    97|│  └───────────────────────────────────────┘  │
    98|│                                             │
    99|│  [📁 Upload .sol]    [🔍 Analyze Contract] │
   100|└─────────────────────────────────────────────┘
   101|```
   102|
   103|**Specs:**
   104|- Monaco Editor: VS Code Dark+ theme
   105|- Height: 400px (resizable)
   106|- Syntax highlighting: Solidity language
   107|- Line numbers: Enabled
   108|- Minimap: Disabled (mobile-friendly)
   109|- Upload button: Secondary style
   110|- Analyze button: Primary, full-width on mobile
   111|
   112|**States:**
   113|- Empty: Placeholder text with example
   114|- Typing: Real-time syntax validation
   115|- Analyzing: Disabled with loading spinner
   116|- Error: Red border + error message below
   117|
   118|---
   119|
   120|### 3. Summary Card
   121|
   122|**Layout:**
   123|```
   124|┌─────────────────────────────────────────────┐
   125|│  📊 Contract Summary                        │
   126|│  ────────────────────────────────────────   │
   127|│                                             │
   128|│  Name: MyToken                              │
   129|│  Type: ERC-20 Token                         │
   130|│  Lines: 245                                 │
   131|│  Functions: 12                              │
   132|│  Risk Score: 🟡 Medium (6/10)               │
   133|│                                             │
   134|│  ⚠️ 2 Critical Issues Found                 │
   135|│  ⚠️ 3 Medium Risks Detected                 │
   136|│  ✅ 5 Safe Patterns Confirmed               │
   137|│                                             │
   138|└─────────────────────────────────────────────┘
   139|```
   140|
   141|**Specs:**
   142|- Card: White background, shadow-lg, rounded-xl
   143|- Icon: Large emoji or SVG (64px)
   144|- Metrics: Grid layout (2 columns on desktop)
   145|- Risk Score: Color-coded badge with icon
   146|- Issues: Inline badges with counts
   147|
   148|---
   149|
   150|### 4. Risk Matrix
   151|
   152|**Layout:**
   153|```
   154|┌─────────────────────────────────────────────┐
   155|│  🚨 Security Risks                          │
   156|│  ────────────────────────────────────────   │
   157|│                                             │
   158|│  🔴 CRITICAL                                │
   159|│  ├─ Reentrancy vulnerability in withdraw() │
   160|│  └─ Unchecked external call in transfer()  │
   161|│                                             │
   162|│  🟠 HIGH                                    │
   163|│  └─ Missing access control on mint()       │
   164|│                                             │
   165|│  🟡 MEDIUM                                  │
   166|│  ├─ Centralized owner privileges           │
   167|│  ├─ No event emission on state changes     │
   168|│  └─ Floating pragma version                │
   169|│                                             │
   170|│  🟢 LOW                                     │
   171|│  └─ Gas optimization opportunities          │
   172|│                                             │
   173|└─────────────────────────────────────────────┘
   174|```
   175|
   176|**Specs:**
   177|- Grouped by severity (collapsible sections)
   178|- Each risk: Icon + title + description
   179|- Click to expand: Full explanation + code snippet
   180|- Color coding: Red → Orange → Yellow → Green
   181|- Severity badge: Pill shape, bold text
   182|
   183|---
   184|
   185|### 5. Function Breakdown (Accordion)
   186|
   187|**Layout:**
   188|```
   189|┌─────────────────────────────────────────────┐
   190|│  ⚙️ Functions (12)                          │
   191|│  ────────────────────────────────────────   │
   192|│                                             │
   193|│  ▼ transfer(address to, uint amount)       │
   194|│     Visibility: public                      │
   195|│     Modifiers: none                         │
   196|│     Risk: 🔴 Critical                       │
   197|│                                             │
   198|│     Explanation:                            │
   199|│     Transfers tokens from sender to         │
   200|│     recipient. Contains reentrancy risk     │
   201|│     due to external call before state       │
   202|│     update.                                 │
   203|│                                             │
   204|│     Code:                                   │
   205|│     ┌─────────────────────────────────┐    │
   206|│     │ function transfer(...) public { │    │
   207|│     │   recipient.call{value: amount} │    │
   208|│     │   balances[msg.sender] -= amount│    │
   209|│     │ }                               │    │
   210|│     └─────────────────────────────────┘    │
   211|│                                             │
   212|│  ▶ balanceOf(address account)              │
   213|│  ▶ approve(address spender, uint amount)   │
   214|│  ...                                        │
   215|│                                             │
   216|└─────────────────────────────────────────────┘
   217|```
   218|
   219|**Specs:**
   220|- Accordion: Expand/collapse individual functions
   221|- Header: Function signature + risk badge
   222|- Body: Metadata + AI explanation + code snippet
   223|- Code snippet: Syntax highlighted, max 10 lines
   224|- "View full code" link if truncated
   225|
   226|---
   227|
   228|### 6. Permission Table
   229|
   230|**Layout:**
   231|```
   232|┌─────────────────────────────────────────────┐
   233|│  🔐 Access Control                          │
   234|│  ────────────────────────────────────────   │
   235|│                                             │
   236|│  Function          Visibility    Modifier   │
   237|│  ───────────────────────────────────────    │
   238|│  transfer()        public        -          │
   239|│  mint()            public        onlyOwner  │
   240|│  burn()            internal      -          │
   241|│  pause()           external      onlyOwner  │
   242|│  _beforeTransfer() private       -          │
   243|│                                             │
   244|│  ⚠️ Owner Privileges Detected:              │
   245|│  • Can mint unlimited tokens                │
   246|│  • Can pause all transfers                  │
   247|│  • Can change contract parameters           │
   248|│                                             │
   249|└─────────────────────────────────────────────┘
   250|```
   251|
   252|**Specs:**
   253|- Table: Responsive (stacks on mobile)
   254|- Columns: Function | Visibility | Modifiers | Risk
   255|- Sortable: Click column headers
   256|- Owner section: Highlighted box below table
   257|- Warning icon for centralization risks
   258|
   259|---
   260|
   261|### 7. Flow Diagram
   262|
   263|**Layout:**
   264|```
   265|┌─────────────────────────────────────────────┐
   266|│  🔄 Contract Flow                           │
   267|│  ────────────────────────────────────────   │
   268|│                                             │
   269|│  [Mermaid.js diagram rendered here]         │
   270|│                                             │
   271|│  User                                       │
   272|│   │                                         │
   273|│   ├─► transfer()                            │
   274|│   │    ├─► _beforeTransfer()                │
   275|│   │    ├─► balances[from] -= amount         │
   276|│   │    ├─► balances[to] += amount           │
   277|│   │    └─► emit Transfer()                  │
   278|│   │                                         │
   279|│   └─► approve()                             │
   280|│        └─► allowances[owner][spender] = amt │
   281|│                                             │
   282|│  [Download SVG] [Copy Mermaid Code]         │
   283|│                                             │
   284|└─────────────────────────────────────────────┘
   285|```
   286|
   287|**Specs:**
   288|- Mermaid.js: Flowchart or sequence diagram
   289|- Theme: Dark mode compatible
   290|- Interactive: Zoom/pan on desktop
   291|- Export: SVG download + Mermaid code copy
   292|- Fallback: Static image if rendering fails
   293|
   294|---
   295|
   296|### 8. Export Panel
   297|
   298|**Layout:**
   299|```
   300|┌─────────────────────────────────────────────┐
   301|│  📥 Export Analysis                         │
   302|│  ────────────────────────────────────────   │
   303|│                                             │
   304|│  [📄 Download Markdown]                     │
   305|│  [📋 Copy to Clipboard]                     │
   306|│  [📊 Export JSON]                           │
   307|│  [📑 Generate PDF]                          │
   308|│                                             │
   309|└─────────────────────────────────────────────┘
   310|```
   311|
   312|**Specs:**
   313|- Buttons: Grid layout (2x2)
   314|- Icons: File type indicators
   315|- Markdown: Formatted audit report
   316|- JSON: Structured data for APIs
   317|- PDF: Professional report (future)
   318|
   319|---
   320|
   321|## Responsive Design
   322|
   323|### Desktop (≥1024px)
   324|- Two-column layout: Editor (60%) | Results (40%)
   325|- Side-by-side comparison mode
   326|- Sticky results panel on scroll
   327|
   328|### Tablet (768px - 1023px)
   329|- Single column, stacked sections
   330|- Collapsible editor after analysis
   331|- Full-width results
   332|
   333|### Mobile (≤767px)
   334|- Vertical stack, full-width components
   335|- Simplified tables (card layout)
   336|- Bottom sheet for export options
   337|- Reduced code snippet height
   338|
   339|---
   340|
   341|## Interaction Patterns
   342|
   343|### Loading States
   344|1. **Analyzing:** Progress bar with steps
   345|   - Parsing contract... (20%)
   346|   - Detecting patterns... (40%)
   347|   - Analyzing risks... (60%)
   348|   - Generating report... (80%)
   349|   - Complete! (100%)
   350|
   351|2. **Skeleton screens:** Show layout before content loads
   352|
   353|### Error States
   354|- **Parse error:** Highlight line + error message
   355|- **API error:** Retry button + fallback message
   356|- **Network error:** Offline indicator + cache option
   357|
   358|### Empty States
   359|- **No code:** Illustration + "Paste code to begin"
   360|- **No risks:** Celebration message + "Contract looks safe!"
   361|
   362|### Success States
   363|- **Analysis complete:** Confetti animation (optional)
   364|- **Export success:** Toast notification
   365|
   366|---
   367|
   368|## Accessibility
   369|
   370|- **ARIA labels:** All interactive elements
   371|- **Keyboard navigation:** Tab order, shortcuts
   372|- **Screen reader:** Descriptive text for diagrams
   373|- **Color contrast:** WCAG AA minimum (4.5:1)
   374|- **Focus indicators:** Visible outlines
   375|- **Alt text:** All icons and images
   376|
   377|---
   378|
   379|## Animation & Motion
   380|
   381|**Principles:**
   382|- Subtle, purposeful animations
   383|- Respect `prefers-reduced-motion`
   384|- 200-300ms duration for micro-interactions
   385|
   386|**Examples:**
   387|- Accordion expand/collapse: Smooth height transition
   388|- Risk badges: Fade in with stagger
   389|- Loading spinner: Rotating shield icon
   390|- Success state: Scale + fade in
   391|
   392|---
   393|
   394|## Dark Mode
   395|
   396|**Toggle:** Top-right corner (sun/moon icon)
   397|
   398|**Color Adjustments:**
   399|- Background: `#0f172a` (slate-900)
   400|- Cards: `#1e293b` (slate-800)
   401|- Text: `#f1f5f9` (slate-100)
   402|- Borders: `#334155` (slate-700)
   403|- Code editor: VS Code Dark+ theme
   404|
   405|---
   406|
   407|## Sample Contracts
   408|
   409|**Dropdown options:**
   410|1. **Simple ERC-20** - Basic token (safe)
   411|2. **Vulnerable Token** - Reentrancy example
   412|3. **Ownable Contract** - Centralization risks
   413|4. **Upgradeable Proxy** - Complex pattern
   414|5. **DeFi Vault** - Real-world example
   415|
   416|---
   417|
   418|## Technical Implementation Notes
   419|
   420|### Monaco Editor Setup
   421|```typescript
   422|import Editor from '@monaco-editor/react';
   423|
   424|<Editor
   425|  height="400px"
   426|  language="sol"
   427|  theme="vs-dark"
   428|  value={code}
   429|  onChange={setCode}
   430|  options={{
   431|    minimap: { enabled: false },
   432|    fontSize: 14,
   433|    lineNumbers: 'on',
   434|    scrollBeyondLastLine: false,
   435|  }}
   436|/>
   437|```
   438|
   439|### Mermaid.js Integration
   440|```typescript
   441|import mermaid from 'mermaid';
   442|
   443|useEffect(() => {
   444|  mermaid.initialize({ theme: 'dark' });
   445|  mermaid.contentLoaded();
   446|}, [flowDiagram]);
   447|```
   448|
   449|### Risk Scoring Algorithm
   450|```typescript
   451|const calculateRiskScore = (issues) => {
   452|  const weights = { critical: 10, high: 5, medium: 2, low: 1 };
   453|  const total = issues.reduce((sum, issue) => 
   454|    sum + weights[issue.severity], 0
   455|  );
   456|  return Math.min(total, 10); // Cap at 10
   457|};
   458|```
   459|
   460|---
   461|
   462|## File Structure
   463|
   464|```
   465|mimo-contract-explainer/
   466|├── app/
   467|│   ├── page.tsx                 # Home page
   468|│   ├── layout.tsx               # Root layout
   469|│   ├── api/
   470|│   │   ├── analyze/route.ts     # Analysis endpoint
   471|│   │   └── export/route.ts      # Export endpoint
   472|│   └── components/
   473|│       ├── Hero.tsx
   474|│       ├── CodeEditor.tsx
   475|│       ├── SummaryCard.tsx
   476|│       ├── RiskMatrix.tsx
   477|│       ├── FunctionBreakdown.tsx
   478|│       ├── PermissionTable.tsx
   479|│       ├── FlowDiagram.tsx
   480|│       └── ExportPanel.tsx
   481|├── lib/
   482|│   ├── parser.ts                # Solidity parser
   483|│   ├── analyzer.ts              # Risk detection
   484|│   ├── groq.ts                  # AI integration
   485|│   └── export.ts                # Report generation
   486|├── public/
   487|│   ├── samples/                 # Sample contracts
   488|│   └── logo.svg
   489|└── styles/
   490|    └── globals.css              # Tailwind + custom
   491|```
   492|
   493|---
   494|
   495|## API Endpoint Design
   496|
   497|### POST /api/analyze
   498|
   499|**Request:**
   500|```json
   501|