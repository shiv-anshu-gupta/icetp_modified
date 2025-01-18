// src/app/api/events/route.ts
import { executeQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await executeQuery({
      query: 'SELECT * FROM committe',
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}

