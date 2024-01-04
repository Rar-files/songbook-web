import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    const id = +params.id
    const category = await prisma.category.findUnique({
        where: {
            id,
        },
    })

    if (!category)
        return NextResponse.json(
            { message: 'Category not found' },
            { status: 404 }
        )

    return NextResponse.json(category, { status: 200 })
}

export const DELETE = async (
    request: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const id = +params.id
        await prisma.song.delete({
            where: { id },
        })

        return new NextResponse(null, { status: 204 })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.code === 'P2025') {
            return new NextResponse('No category with ID found', {
                status: 404,
            })
        }

        return new NextResponse(error.message, { status: 500 })
    }
}
