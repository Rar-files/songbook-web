import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: number } }
) {
    const id = params.id
    const file = await fs.readFile(
        process.cwd() + '/public/data/songbook.json',
        'utf8'
    )
    const data = await JSON.parse(file)

    return NextResponse.json(data[id], { status: 200 })
}
