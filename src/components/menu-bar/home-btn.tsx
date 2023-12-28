'use client'

import Link from 'next/link'
import { FC } from 'react'

const HomeBtn: FC = () => {
    return (
        <Link href={`/`}>
            <button
                className={`h-10 w-10 rounded-md hover:scale-110 duration-200 bg-slate-200 dark:bg-[#212933]`}
            >
                <span className={'icon-[mdi--home]'} />
            </button>
        </Link>
    )
}

export default HomeBtn
