'use client'

import { createContext, useState } from 'react'

export const TranslationContext = createContext({
    translation: 0,
    setTranslation: (translation: number) => {
        translation
    },
})

const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
    const [translation, setTranslation] = useState(0)

    return (
        <TranslationContext.Provider value={{ translation, setTranslation }}>
            {children}
        </TranslationContext.Provider>
    )
}

export { TranslationProvider }
