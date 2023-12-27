'use client'

import { useTheme } from 'next-themes'

const SystemThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { setTheme, systemTheme } = useTheme()

    if (systemTheme == 'light') setTheme(systemTheme)

    return <>{children}</>
}

export { SystemThemeProvider }
