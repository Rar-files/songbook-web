import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

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
