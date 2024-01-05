import { prisma } from '@/services/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const songs = await prisma.song.findMany({
        include: {
            structure: true,
        },
    })

    const songResponse = songs.map((song) => {
        return {
            id: song.id,
            name: song.name,
        }
    })

    return NextResponse.json(songResponse, { status: 200 })
}
