     1|     1|     1|     1|# MiMo Smart Contract Explainer
     2|     2|     2|     2|
     3|     3|     3|     3|AI-powered Solidity contract analysis and risk assessment tool.
     4|     4|     4|     4|
     5|     5|     5|     5|## Features
     6|     6|     6|     6|- **Smart Contract Analysis** - Paste Solidity code, get instant explanations
     7|     7|     7|     7|- **Risk Detection** - Identify vulnerabilities (reentrancy, overflow, etc.)
     8|     8|     8|     8|- **Permission Mapping** - Visualize access control and owner privileges
     9|     9|     9|     9|- **Flow Visualization** - Generate contract execution diagrams
    10|    10|    10|    10|- **Audit Report Generation** - Export professional markdown reports
    11|    11|    11|    11|
    12|    12|    12|    12|## Tech Stack
    13|    13|    13|    13|- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
    14|    14|    14|    14|- **UI Components:** Shadcn/ui, Monaco Editor, Mermaid.js
    15|    15|    15|    15|- **Backend:** Next.js API Routes, @solidity-parser/parser
    16|    16|    16|    16|- **AI Integration:** Groq API (Llama 3.3 70B)
    17|    17|    17|    17|- **Hosting:** Netlify (static + serverless functions)
    18|    18|    18|    18|
    19|    19|    19|    19|## Quick Start
    20|    20|
    21|    21|## 🚀 Getting Started
    22|    22|
    23|    23|Follow this step-by-step guide to set up and run MiMo Smart Contract Explainer locally or deploy it to production.
    24|    24|
    25|    25|### Prerequisites
    26|    26|
    27|    27|Before you begin, ensure you have:
    28|    28|
    29|    29|- **Node.js** 18.0 or higher
    30|    30|- **npm** 9.0 or higher (or **yarn**/**pnpm**)
    31|    31|- **Git** for version control
    32|    32|- **Groq API Key** (optional for local development)
    33|    33|
    34|    34|### Step 1: Clone the Repository
    35|    35|
    36|    36|```bash
    37|    37|# Clone the repository
    38|    38|git clone https://github.com/ramdanbudakayat1/mimo-contract-explainer.git
    39|    39|
    40|    40|# Navigate to project directory
    41|    41|cd mimo-contract-explainer
    42|    42|```
    43|    43|
    44|    44|### Step 2: Install Dependencies
    45|    45|
    46|    46|```bash
    47|    47|# Install all required packages
    48|    48|npm install
    49|    49|
    50|    50|# Or using yarn
    51|    51|yarn install
    52|    52|
    53|    53|# Or using pnpm
    54|    54|pnpm install
    55|    55|```
    56|    56|
    57|    57|### Step 3: Configure Environment Variables
    58|    58|
    59|    59|Create a `.env.local` file in the project root:
    60|    60|
    61|    61|```bash
    62|    62|# Copy the example environment file
    63|    63|cp .env.example .env.local
    64|    64|```
    65|    65|
    66|    66|Edit `.env.local` and add your configuration:
    67|    67|
    68|    68|```bash
    69|    69|# Required for production (optional for development)
    70|    70|GROQ_API_KEY=your_groq_api_key_here
    71|    71|
    72|    72|# Optional: Application configuration
    73|    73|NEXT_PUBLIC_APP_URL=http://localhost:3000
    74|    74|NEXT_PUBLIC_APP_NAME="MiMo Contract Explainer"
    75|    75|```
    76|    76|
    77|    77|**Getting a Groq API Key:**
    78|    78|1. Sign up at [groq.com](https://console.groq.com)
    79|    79|2. Navigate to API Keys section
    80|    80|3. Create a new API key
    81|    81|4. Copy and paste into `.env.local`
    82|    82|
    83|    83|### Step 4: Run the Development Server
    84|    84|
    85|    85|```bash
    86|    86|# Start the development server
    87|    87|npm run dev
    88|    88|
    89|    89|# Or using yarn
    90|    90|yarn dev
    91|    91|
    92|    92|# Or using pnpm
    93|    93|pnpm dev
    94|    94|```
    95|    95|
    96|    96|The application will be available at [http://localhost:3000](http://localhost:3000).
    97|    97|
    98|    98|### Step 5: Test the Application
    99|    99|
   100|   100|1. **Open your browser** and go to `http://localhost:3000`
   101|   101|2. **Paste Solidity code** into the editor or select a sample contract
   102|   102|3. **Click "Analyze Contract"** to see the AI-powered analysis
   103|   103|4. **Explore the results** including risks, functions, and permissions
   104|   104|5. **Try export features** to generate Markdown or JSON reports
   105|   105|
   106|   106|### Step 6: Build for Production
   107|   107|
   108|   108|```bash
   109|   109|# Create a production build
   110|   110|npm run build
   111|   111|
   112|   112|# Start the production server
   113|   113|npm start
   114|   114|```
   115|   115|
   116|   116|### Step 7: Deploy to Netlify (Recommended)
   117|   117|
   118|   118|#### Option A: Deploy via Netlify Dashboard
   119|   119|1. **Sign in** to [Netlify](https://app.netlify.com)
   120|   120|2. Click **"Import from Git"**
   121|   121|3. Select **GitHub** and authorize access
   122|   122|4. Choose **ramdanbudakayat1/mimo-contract-explainer**
   123|   123|5. Configure build settings:
   124|   124|   - **Build command:** `npm run build`
   125|   125|   - **Publish directory:** `.next`
   126|   126|6. Click **"Deploy site"**
   127|   127|7. Add environment variables in **Site settings → Environment variables**:
   128|   128|   - `GROQ_API_KEY` = your Groq API key
   129|   129|
   130|   130|#### Option B: Deploy via Netlify CLI
   131|   131|```bash
   132|   132|# Install Netlify CLI globally
   133|   133|npm install -g netlify-cli
   134|   134|
   135|   135|# Login to Netlify
   136|   136|netlify login
   137|   137|
   138|   138|# Initialize and deploy
   139|   139|netlify init
   140|   140|netlify deploy --prod
   141|   141|```
   142|   142|
   143|   143|### Step 8: Deploy to Vercel
   144|   144|
   145|   145|#### Option A: Deploy via Vercel Dashboard
   146|   146|1. **Sign in** to [Vercel](https://vercel.com)
   147|   147|2. Click **"Import Project"**
   148|   148|3. Import from **GitHub**
   149|   149|4. Select **ramdanbudakayat1/mimo-contract-explainer**
   150|   150|5. Vercel will auto-detect Next.js settings
   151|   151|6. Add environment variables:
   152|   152|   - `GROQ_API_KEY` = your Groq API key
   153|   153|7. Click **"Deploy"**
   154|   154|
   155|   155|#### Option B: Deploy via Vercel CLI
   156|   156|```bash
   157|   157|# Install Vercel CLI globally
   158|   158|npm install -g vercel
   159|   159|
   160|   160|# Deploy
   161|   161|vercel
   162|   162|```
   163|   163|
   164|   164|### Step 9: Verify Deployment
   165|   165|
   166|   166|After deployment, verify your application is working:
   167|   167|
   168|   168|1. **Visit your deployment URL** (provided by Netlify/Vercel)
   169|   169|2. **Test analysis** with sample contracts
   170|   170|3. **Check API health** at `/api/health`
   171|   171|4. **Verify export functionality** works correctly
   172|   172|
   173|   173|### Troubleshooting Common Issues
   174|   174|
   175|   175|#### Issue 1: "API key not configured"
   176|   176|**Solution:** The application will use mock data. For real AI analysis:
   177|   177|1. Get a Groq API key from [console.groq.com](https://console.groq.com)
   178|   178|2. Add it to `.env.local` (local) or deployment environment variables
   179|   179|
   180|   180|#### Issue 2: Build fails on Netlify/Vercel
   181|   181|**Solution:**
   182|   182|```bash
   183|   183|# Check build logs for specific errors
   184|   184|# Common fixes:
   185|   185|
   186|   186|# 1. Update dependencies
   187|   187|npm update
   188|   188|
   189|   189|# 2. Clear cache and rebuild
   190|   190|npm run clean && npm run build
   191|   191|
   192|   192|# 3. Check Node.js version (requires 18+)
   193|   193|node --version
   194|   194|```
   195|   195|
   196|   196|#### Issue 3: "Module not found" errors
   197|   197|**Solution:**
   198|   198|```bash
   199|   199|# Reinstall dependencies
   200|   200|rm -rf node_modules package-lock.json
   201|   201|npm install
   202|   202|```
   203|   203|
   204|   204|#### Issue 4: Slow API responses
   205|   205|**Solution:**
   206|   206|1. Check Groq API status at [status.groq.com](https://status.groq.com)
   207|   207|2. Implement client-side caching
   208|   208|3. Use mock data for development
   209|   209|
   210|   210|### Development Workflow
   211|   211|
   212|   212|#### Running Tests
   213|   213|```bash
   214|   214|# Run all tests
   215|   215|npm test
   216|   216|
   217|   217|# Run tests in watch mode
   218|   218|npm run test:watch
   219|   219|
   220|   220|# Run specific test file
   221|   221|npm test -- components/pages/SummaryCard.test.tsx
   222|   222|```
   223|   223|
   224|   224|#### Code Quality
   225|   225|```bash
   226|   226|# Lint code
   227|   227|npm run lint
   228|   228|
   229|   229|# Format code
   230|   230|npx prettier --write .
   231|   231|
   232|   232|# Type checking
   233|   233|npx tsc --noEmit
   234|   234|```
   235|   235|
   236|   236|#### Project Structure
   237|   237|```
   238|   238|mimo-contract-explainer/
   239|   239|├── app/                    # Next.js app router
   240|   240|│   ├── page.tsx           # Home page
   241|   241|│   ├── results/           # Results page
   242|   242|│   └── api/               # API endpoints
   243|   243|├── components/            # React components
   244|   244|│   ├── pages/            # Page-specific components
   245|   245|│   └── layout/           # Layout components
   246|   246|├── lib/                   # Utility functions
   247|   247|│   ├── api/              # API integration
   248|   248|│   └── utils/            # Helper functions
   249|   249|├── public/                # Static assets
   250|   250|│   └── samples/          # Sample contracts
   251|   251|└── screenshots/          # UI mockups
   252|   252|```
   253|   253|
   254|   254|### Next Steps After Setup
   255|   255|
   256|   256|1. **Explore the codebase** to understand the architecture
   257|   257|2. **Try different sample contracts** to see various analyses
   258|   258|3. **Customize the UI** by modifying Tailwind CSS in `tailwind.config.ts`
   259|   259|4. **Add new security patterns** in `lib/api/analyze.ts`
   260|   260|5. **Extend export functionality** in `components/pages/ExportPanel.tsx`
   261|   261|6. **Contribute improvements** via pull requests
   262|   262|
   263|   263|### Need Help?
   264|   264|
   265|   265|- **Check the documentation** in `/docs` directory
   266|   266|- **Review existing issues** on GitHub
   267|   267|- **Create a new issue** for bugs or feature requests
   268|   268|- **Join discussions** in the repository
   269|   269|
   270|   270|---
   271|   271|
   272|   272|*Last Updated: 2026-05-23*  
   273|   273|*Estimated Setup Time: 10-15 minutes*  
   274|   274|*Difficulty Level: Beginner-friendly*
   275|   275|
   276|   276|    20|    20|
   277|   277|    21|    21|```bash
   278|   278|    22|    22|# Clone repository
   279|   279|    23|    23|git clone https://github.com/ramdanbudakayat1/mimo-contract-explainer.git
   280|   280|    24|    24|cd mimo-contract-explainer
   281|   281|    25|    25|
   282|   282|    26|    26|# Install dependencies
   283|   283|    27|    27|npm install
   284|   284|    28|    28|
   285|   285|    29|    29|# Set up environment variables
   286|   286|    30|    30|cp .env.example .env.local
   287|   287|    31|    31|# Add your Groq API key to .env.local
   288|   288|    32|    32|
   289|   289|    33|    33|# Run development server
   290|   290|    34|    34|npm run dev
   291|   291|    35|    35|```
   292|   292|    36|    36|
   293|   293|    37|    37|Open [http://localhost:3000](http://localhost:3000) in your browser.
   294|   294|    38|    38|
   295|   295|    39|    39|
   296|   296|    40|    40|
   297|   297|    41|    41|## Screenshots
   298|   298|    42|    42|
   299|   299|    43|    43|The application provides a user-friendly interface for analyzing and visualizing Solidity contracts, as shown below:
   300|   300|    44|    44|
   301|   301|    45|    45|### 1. Home Page - Hero Section & Code Input
   302|   302|    46|    46|![Home Page](screenshots/hero.png)
   303|   303|    47|    47|*Clean, modern interface with code editor and sample contracts*
   304|   304|    48|    48|
   305|   305|    49|    49|### 2. Analysis Results - Summary Card
   306|   306|    50|    50|![Summary Card](screenshots/summary.png)
   307|   307|    51|    51|*Contract overview with risk score and key metrics*
   308|   308|    52|    52|
   309|   309|    53|    53|### 3. Security Risks - Risk Matrix
   310|   310|    54|    54|![Risk Matrix](screenshots/risks.png)
   311|   311|    55|    55|*Categorized risk detection with severity levels*
   312|   312|    56|    56|
   313|   313|    57|    57|### 4. Function Breakdown & Access Control
   314|   314|    58|    58|![Function Analysis](screenshots/functions.png)
   315|   315|    59|    59|*Detailed function explanations and permission mapping*
   316|   316|    60|    60|
   317|   317|    61|    61|### 5. Owner Privileges & Contract Flow
   318|   318|    62|    62|![Owner Privileges](screenshots/owner.png)
   319|   319|    63|    63|*Centralization risks and contract execution flow*
   320|   320|    64|    64|
   321|   321|    65|    65|### 6. Export & Report Generation
   322|   322|    66|    66|![Export Panel](screenshots/export.png)
   323|   323|    67|    67|*Multiple export options for audit reports*
   324|   324|    68|    68|
   325|   325|    69|    69|
   326|   326|    70|
   327|   327|    71|## AI Integration & Technical Architecture
   328|   328|    72|
   329|   329|    73|### 1. AI Analysis Pipeline
   330|   330|    74|
   331|   331|    75|The application uses a multi-stage AI pipeline for comprehensive contract analysis:
   332|   332|    76|
   333|   333|    77|```
   334|   334|    78|Solidity Code → Parser → AST Extraction → AI Analysis → Risk Scoring → Visualization
   335|   335|    79|```
   336|   336|    80|
   337|   337|    81|**Stage 1: Code Parsing**
   338|   338|    82|- **Tool:** `@solidity-parser/parser` (Solidity AST parser)
   339|   339|    83|- **Output:** Abstract Syntax Tree (AST) with function definitions, modifiers, and visibility
   340|   340|    84|- **Features:** Line number tracking, parameter extraction, contract structure analysis
   341|   341|    85|
   342|   342|    86|**Stage 2: AI-Powered Analysis**
   343|   343|    87|- **Primary Provider:** Groq API with Llama 3.3 70B
   344|   344|    88|- **Fallback:** Mock data with realistic analysis patterns
   345|   345|    89|- **Prompt Engineering:** Structured prompts for consistent JSON output
   346|   346|    90|- **Rate Limiting:** 30 RPM (free tier), with exponential backoff
   347|   347|    91|
   348|   348|    92|**Stage 3: Risk Detection Engine**
   349|   349|    93|- **Pattern Matching:** 10+ common Solidity vulnerabilities
   350|   350|    94|- **Severity Scoring:** Critical (10), High (7), Medium (4), Low (1)
   351|   351|    95|- **Location Tracking:** Line numbers and function references
   352|   352|    96|- **Recommendations:** Remediation suggestions for each risk
   353|   353|    97|
   354|   354|    98|### 2. Groq API Integration
   355|   355|    99|
   356|   356|   100|```typescript
   357|   357|   101|// lib/api/analyze.ts - Core AI integration
   358|   358|   102|import { Groq } from 'groq-sdk'
   359|   359|   103|
   360|   360|   104|const groq = new Groq({
   361|   361|   105|  apiKey: process.env.GROQ_API_KEY,
   362|   362|   106|})
   363|   363|   107|
   364|   364|   108|async function analyzeWithAI(code: string, functions: any[]) {
   365|   365|   109|  const prompt = `Analyze this Solidity contract and provide:
   366|   366|   110|  1. Security risks with severity (critical, high, medium, low)
   367|   367|   111|  2. Function explanations
   368|   368|   112|  3. Risk assessment for each function
   369|   369|   113|
   370|   370|   114|  Return JSON format with structured data.`
   371|   371|   115|  
   372|   372|   116|  const response = await groq.chat.completions.create({
   373|   373|   117|    messages: [
   374|   374|   118|      {
   375|   375|   119|        role: 'system',
   376|   376|   120|        content: 'You are a smart contract security expert...',
   377|   377|   121|      },
   378|   378|   122|      {
   379|   379|   123|        role: 'user',
   380|   380|   124|        content: prompt,
   381|   381|   125|      },
   382|   382|   126|    ],
   383|   383|   127|    model: 'llama-3.3-70b-versatile',
   384|   384|   128|    temperature: 0.1,
   385|   385|   129|    response_format: { type: 'json_object' },
   386|   386|   130|  })
   387|   387|   131|  
   388|   388|   132|  return JSON.parse(response.choices[0]?.message?.content || '{}')
   389|   389|   133|}
   390|   390|   134|```
   391|   391|   135|
   392|   392|   136|**Key Features:**
   393|   393|   137|- **Structured Output:** Enforced JSON response format
   394|   394|   138|- **Temperature Control:** 0.1 for deterministic analysis
   395|   395|   139|- **Token Optimization:** Code truncation to 2000 tokens
   396|   396|   140|- **Error Handling:** Graceful fallback to mock data
   397|   397|   141|
   398|   398|   142|### 3. Mock Data Fallback System
   399|   399|   143|
   400|   400|   144|When the Groq API is unavailable or unconfigured, the application provides realistic mock analysis:
   401|   401|   145|
   402|   402|   146|```typescript
   403|   403|   147|// Mock data generation for development and testing
   404|   404|   148|function getMockAnalysis(): AnalysisResult {
   405|   405|   149|  return {
   406|   406|   150|    summary: { name: 'MyToken', type: 'ERC-20', lines: 245, functions: 12, riskScore: 6 },
   407|   407|   151|    risks: [
   408|   408|   152|      {
   409|   409|   153|        severity: 'critical',
   410|   410|   154|        title: 'Reentrancy vulnerability in withdraw()',
   411|   411|   155|        description: 'External call before state update allows reentrancy attacks',
   412|   412|   156|        location: { line: 42, function: 'withdraw' },
   413|   413|   157|      },
   414|   414|   158|      // ... additional mock risks
   415|   415|   159|    ],
   416|   416|   160|    // ... complete mock data structure
   417|   417|   161|  }
   418|   418|   162|}
   419|   419|   163|```
   420|   420|   164|
   421|   421|   165|**Benefits:**
   422|   422|   166|- **Development:** No API key required for local development
   423|   423|   167|- **Testing:** Consistent data for UI testing
   424|   424|   168|- **Demo:** Fully functional demo without external dependencies
   425|   425|   169|- **Fallback:** Graceful degradation when API fails
   426|   426|   170|
   427|   427|   171|### 4. Security Pattern Detection
   428|   428|   172|
   429|   429|   173|The system detects 10+ common Solidity security patterns:
   430|   430|   174|
   431|   431|   175|| Pattern | Severity | Detection Method | Remediation |
   432|   432|   176||---------|----------|------------------|-------------|
   433|   433|   177|| **Reentrancy** | Critical | External call before state update | Use Checks-Effects-Interactions pattern |
   434|   434|   178|| **Integer Overflow** | High | Unchecked arithmetic operations | Use SafeMath or Solidity 0.8+ |
   435|   435|   179|| **Access Control** | High | Missing onlyOwner or role checks | Implement proper access control |
   436|   436|   180|| **Centralization** | Medium | Single owner with excessive privileges | Implement timelock or multi-sig |
   437|   437|   181|| **Gas Limit** | Medium | Unbounded loops or arrays | Limit array sizes, use pagination |
   438|   438|   182|| **Event Emission** | Low | Missing events on state changes | Emit events for all state changes |
   439|   439|   183|| **Floating Pragma** | Low | Non-fixed pragma version | Use fixed version: `pragma solidity 0.8.0;` |
   440|   440|   184|
   441|   441|   185|### 5. Performance Optimization
   442|   442|   186|
   443|   443|   187|**Caching Strategy:**
   444|   444|   188|- **Session Storage:** Analysis results cached in browser session
   445|   445|   189|- **Local Storage:** User preferences and settings
   446|   446|   190|- **CDN Caching:** Static assets via Netlify/Vercel CDN
   447|   447|   191|
   448|   448|   192|**API Optimization:**
   449|   449|   193|- **Request Batching:** Multiple analyses in single API call
   450|   450|   194|- **Token Truncation:** Code limited to 2000 tokens for cost efficiency
   451|   451|   195|- **Parallel Processing:** Concurrent analysis of different contract sections
   452|   452|   196|
   453|   453|   197|**Frontend Optimization:**
   454|   454|   198|- **Lazy Loading:** Components load on demand
   455|   455|   199|- **Code Splitting:** Separate bundles for editor and results
   456|   456|   200|- **Image Optimization:** WebP format with responsive sizing
   457|   457|   201|
   458|   458|   202|### 6. Scalability & Deployment
   459|   459|   203|
   460|   460|   204|**Horizontal Scaling:**
   461|   461|   205|- **Stateless API:** Each request independent, easy to scale
   462|   462|   206|- **Load Balancing:** Multiple API instances behind load balancer
   463|   463|   207|- **Database Optional:** Session-based, no database required for MVP
   464|   464|   208|
   465|   465|   209|**Deployment Options:**
   466|   466|   210|1. **Netlify:** Serverless functions + CDN (recommended)
   467|   467|   211|2. **Vercel:** Next.js native hosting
   468|   468|   212|3. **AWS Lambda:** Custom serverless deployment
   469|   469|   213|4. **Docker:** Self-hosted container deployment
   470|   470|   214|
   471|   471|   215|**Environment Configuration:**
   472|   472|   216|```bash
   473|   473|   217|# Required
   474|   474|   218|GROQ_API_KEY=your_groq_api_key_here
   475|   475|   219|
   476|   476|   220|# Optional
   477|   477|   221|NEXT_PUBLIC_APP_URL=https://your-domain.com
   478|   478|   222|NEXT_PUBLIC_APP_NAME="MiMo Contract Explainer"
   479|   479|   223|NEXT_PUBLIC_ANALYSIS_TIMEOUT=10000
   480|   480|   224|```
   481|   481|   225|
   482|   482|   226|### 7. Monitoring & Analytics
   483|   483|   227|
   484|   484|   228|**Built-in Monitoring:**
   485|   485|   229|- **Console Logging:** Detailed analysis logs for debugging
   486|   486|   230|- **Error Tracking:** Sentry integration ready
   487|   487|   231|- **Performance Metrics:** API response time tracking
   488|   488|   232|- **Usage Analytics:** Anonymous usage statistics
   489|   489|   233|
   490|   490|   234|**Health Checks:**
   491|   491|   235|```typescript
   492|   492|   236|// app/api/health/route.ts
   493|   493|   237|export async function GET() {
   494|   494|   238|  return NextResponse.json({
   495|   495|   239|    status: 'healthy',
   496|   496|   240|    timestamp: new Date().toISOString(),
   497|   497|   241|    version: '0.1.0',
   498|   498|   242|    ai_provider: process.env.GROQ_API_KEY ? 'groq' : 'mock',
   499|   499|   243|  })
   500|   500|   244|}
   501|