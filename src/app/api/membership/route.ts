// src/app/api/events/route.ts
import { executeQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await executeQuery({
      query: 'SELECT * FROM membership',
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}

// export async function POST(request: Request) {
//   try {
//     const { name, email } = await request.json();
//     const result = await executeQuery({
//       query: 'INSERT INTO membership (name, email) VALUES (?, ?)',
//       values: [name, email],
//     });
//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to create membership' },
//       { status: 500 }
//     );
//   }
// }