'use client'

import { ThemeProvider } from 'next-themes'
import { SystemThemeProvider } from './system-theme-provider'

const NextThemesProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SystemThemeProvider>{children}</SystemThemeProvider>
        </ThemeProvider>
    )
}

export { NextThemesProvider }
