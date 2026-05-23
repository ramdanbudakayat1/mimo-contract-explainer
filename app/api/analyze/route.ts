import { NextRequest, NextResponse } from 'next/server'
import { analyzeContract } from '@/lib/api/analyze'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()
    
    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { error: 'Code is required and must be a string' },
        { status: 400 }
      )
    }
    
    // Validate code length
    if (code.length > 10000) {
      return NextResponse.json(
        { error: 'Code exceeds maximum length of 10,000 characters' },
        { status: 400 }
      )
    }
    
    console.log('Analyzing contract...')
    const result = await analyzeContract(code)
    console.log('Analysis complete:', result.summary)
    
    // Return direct structure (no wrapper)
    return NextResponse.json(result)
    
  } catch (error: unknown) {
    console.error('API error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Use POST method with { "code": "solidity code here" }' },
    { status: 200 }
  )
}
