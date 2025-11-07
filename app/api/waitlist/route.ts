import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Define data directory and file path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'waitlist.json');

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read existing data or initialize empty array
    let waitlist = [];
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      waitlist = JSON.parse(fileContent);
    }

    // Check if email already exists
    if (waitlist.some((entry: any) => entry.email === email)) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 200 }
      );
    }

    // Add new entry
    waitlist.push({
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    });

    // Write back to file
    await writeFile(filePath, JSON.stringify(waitlist, null, 2));

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to save email' },
      { status: 500 }
    );
  }
}

