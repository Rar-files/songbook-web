import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    const id = +params.id
    const categorySongs = await prisma.category.findMany({
        where: {
            id,
        },
        include: {
            songs: true,
        },
    })

    if (!categorySongs)
        return NextResponse.json(
            { message: 'Category not found' },
            { status: 404 }
        )

    return NextResponse.json(categorySongs, { status: 200 })
}
