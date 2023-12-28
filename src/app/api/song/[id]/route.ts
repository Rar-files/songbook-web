import { IChord } from '@/types/IChord'
import { IChordsSet } from '@/types/IChordsSet'
import { ISong } from '@/types/ISong'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    const id = +params.id
    const song = await prisma.song.findUnique({
        where: {
            id,
        },
        include: {
            chordsSets: true,
            lyricsSets: true,
            structure: true,
        },
    })

    if (!song)
        return NextResponse.json({ message: 'Song not found' }, { status: 404 })

    const songResponse: ISong = {
        ...song,
        chordsSets: song?.chordsSets.map(
            (chordsSet) =>
                ({
                    ...chordsSet,
                    chords: JSON.parse(chordsSet.chords) as IChord[][],
                }) as IChordsSet
        ),
    }

    return NextResponse.json(songResponse, { status: 200 })
}

export const DELETE = async (
    request: Request,
    { params }: { params: { id: number } }
) => {
    try {
        const id = params.id
        await prisma.song.delete({
            where: { id },
        })

        return new NextResponse(null, { status: 204 })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.code === 'P2025') {
            return new NextResponse('No song with ID found', { status: 404 })
        }

        return new NextResponse(error.message, { status: 500 })
    }
}
