import { ISong } from '@/types/ISong'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
    const file = await fs.readFile(
        process.cwd() + '/public/data/songbook.json',
        'utf8'
    )
    const data = await JSON.parse(file)

    return NextResponse.json(
        data.map((value: ISong) => value.name),
        { status: 200 }
    )
}
