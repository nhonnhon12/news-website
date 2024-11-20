import { NextResponse } from 'next/server';

let contactStore: { name: string; email: string; website: string; message: string }[];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        contactStore.push(body)
        return NextResponse.json({ message: 'Message received successfully' });
    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ data: contactStore });
}
