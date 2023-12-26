import { NextThemesProvider } from './nextThemesProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <NextThemesProvider>{children}</NextThemesProvider>
}

export { Providers }
