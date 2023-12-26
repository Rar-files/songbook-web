import { GlobalChordsProvider } from './globalChordsProvider'
import { NextThemesProvider } from './nextThemesProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider>
            <GlobalChordsProvider>{children}</GlobalChordsProvider>
        </NextThemesProvider>
    )
}

export { Providers }
