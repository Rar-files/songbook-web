import { GlobalChordsProvider } from './global-chords-provider'
import { NextThemesProvider } from './nextThemesProvider'
import { TranslationProvider } from './translation-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider>
            <TranslationProvider>
                <GlobalChordsProvider>{children}</GlobalChordsProvider>
            </TranslationProvider>
        </NextThemesProvider>
    )
}

export { Providers }
