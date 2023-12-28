'use client'

import { useTheme } from 'next-themes'
import { FC } from 'react'

const ToggleDarkBtn: FC = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button
            className={`h-10 w-10 absolute right-5 top-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <span className={'icon-[mdi--weather-sunny]'} />
            ) : (
                <span className={'icon-[mdi--weather-night]'} />
            )}
        </button>
    )
}

export default ToggleDarkBtn
