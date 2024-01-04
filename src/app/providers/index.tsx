import { NextThemesProvider } from './nextThemesProvider'
import { SWRProvider } from './swr-provider'
import { TranslationProvider } from './translation-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider>
            <SWRProvider>
                <TranslationProvider>{children}</TranslationProvider>
            </SWRProvider>
        </NextThemesProvider>
    )
}

export { Providers }
