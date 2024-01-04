'use client'

import { setCookie } from 'cookies-next'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type props = {
    href: string
    children: React.ReactNode
}

const LinkTo: FC<props> = ({ children, href }: props) => {
    const path = usePathname()

    const handleClick = () => {
        setCookie('lastPath', path)
    }

    return (
        <a type="button" aria-pressed="false" onClick={handleClick}>
            <Link href={href}>{children}</Link>
        </a>
    )
}

export default LinkTo
