'use client'

import React, { FC } from 'react'

type props = {
    children: React.ReactNode
    onClick?: () => void
}

const MenuBtn: FC<props> = ({ children, onClick }: props) => {
    return (
        <button
            className={`h-10 w-10 rounded-md hover:scale-110 duration-200 bg-slate-300 dark:bg-slate-900`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default MenuBtn
