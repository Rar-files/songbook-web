import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
    const file = await fs.readFile(
        process.cwd() + '/data/global-chords.json',
        'utf8'
    )
    const data = await JSON.parse(file)

    return NextResponse.json(data, { status: 200 })
}
