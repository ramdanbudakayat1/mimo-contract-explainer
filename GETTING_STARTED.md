# MiMo Smart Contract Explainer - Quick Start Guide

## 📋 What You'll Need
- Node.js 18+ and npm/yarn/pnpm
- Git installed
- Groq API key (optional for development)
- 10-15 minutes of time

## 🎯 Quick Setup (3 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/ramdanbudakayat1/mimo-contract-explainer.git
cd mimo-contract-explainer

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env.local

# 4. Start development server
npm run dev
```

## 🔑 Getting Your Groq API Key

1. **Sign up** at [console.groq.com](https://console.groq.com)
2. **Navigate** to API Keys section
3. **Create** a new API key
4. **Copy** the key and add to `.env.local`:
   ```
   GROQ_API_KEY=your_key_here
   ```

## 🚀 First Analysis

1. **Open** http://localhost:3000 in your browser
2. **Select** a sample contract from the dropdown
3. **Click** "Analyze Contract"
4. **Explore** the results dashboard

## 🚢 Deployment Options

### Netlify (Easiest)
1. Import from GitHub
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add `GROQ_API_KEY` environment variable

### Vercel (Next.js Native)
1. Import from GitHub
2. Auto-detects Next.js
3. Add `GROQ_API_KEY` environment variable

### Local Production
```bash
npm run build
npm start
```

## 🆘 Common Issues & Solutions

### ❌ "API key not configured"
**✅ Solution:** Application uses mock data. Get a free Groq API key for real analysis.

### ❌ Build fails
**✅ Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Slow performance
**✅ Solution:** Use mock data for development, real API for production.

## 📞 Need Help?
- Check `/docs` directory
- Open GitHub issues
- Review existing documentation

---

**Time to first analysis:** < 5 minutes  
**Deployment time:** < 10 minutes  
**Difficulty:** Beginner-friendly
