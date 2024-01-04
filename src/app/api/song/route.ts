import { IChord } from '@/types/IChord'
import { IChordsSet } from '@/types/IChordsSet'
import { ISong } from '@/types/ISong'
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async () => {
    const songs = await prisma.song.findMany({
        include: {
            category: true,
            chordsSets: true,
            lyricsSets: true,
            structure: true,
        },
    })

    const songResponse: ISong[] = songs.map((song) => ({
        ...song,
        chordsSets: song?.chordsSets.map(
            (chordsSet) =>
                ({
                    ...chordsSet,
                    chords: JSON.parse(chordsSet.chords) as IChord[][],
                }) as IChordsSet
        ),
    }))

    return NextResponse.json(songResponse, { status: 200 })
}

export const POST = async (request: NextRequest) => {
    const reqData = await request.json()

    if (!reqData)
        return NextResponse.json({ error: 'No request data' }, { status: 400 })

    const song = reqData as ISong

    if (
        !song.name ||
        !song.chordsSets ||
        !song.lyricsSets ||
        !song.structure ||
        !song.categoryId
    )
        return NextResponse.json(
            { error: 'Incorrect request' },
            { status: 400 }
        )

    const prismaReq = await prisma.song.create({
        data: {
            categoryId: song.categoryId,
            name: song.name,
            structure: {
                create: song.structure,
            },
            lyricsSets: {
                create: song.lyricsSets,
            },
            chordsSets: {
                create: song.chordsSets.map(
                    (chordSet) =>
                        ({
                            type: chordSet.type,
                            chords: JSON.stringify(chordSet.chords),
                        }) as { type: string; chords: string }
                ),
            },
        },

        include: {
            category: true,
            chordsSets: true,
            lyricsSets: true,
            structure: true,
        },
    })

    return NextResponse.json(prismaReq, { status: 200 })
}
