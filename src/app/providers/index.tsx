import { GlobalChordsProvider } from './global-chords-provider'
import { NextThemesProvider } from './nextThemesProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider>
            <GlobalChordsProvider>{children}</GlobalChordsProvider>
        </NextThemesProvider>
    )
}

export { Providers }
