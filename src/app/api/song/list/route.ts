import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async () => {
    const songs = await prisma.song.findMany()

    return NextResponse.json(songs, { status: 200 })
}
