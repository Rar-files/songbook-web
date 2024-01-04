import { ICategory } from '@/types/ICategory'
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async () => {
    const categories = await prisma.category.findMany()

    if (!categories)
        return NextResponse.json(
            { message: 'Categories not found' },
            { status: 404 }
        )

    return NextResponse.json(categories, { status: 200 })
}

export const POST = async (request: NextRequest) => {
    const reqData = await request.json()

    if (!reqData)
        return NextResponse.json({ error: 'No request data' }, { status: 400 })

    const category = reqData as ICategory

    if (!category.name)
        return NextResponse.json(
            { error: 'Incorrect request' },
            { status: 400 }
        )

    const prismaReq = await prisma.category.create({
        data: {
            name: category.name,
        },
    })

    return NextResponse.json(prismaReq, { status: 200 })
}
