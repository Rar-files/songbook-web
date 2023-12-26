'use client'

import { IGlobalChords } from '@/types/IGlobalChords'
import { createContext, useEffect, useState } from 'react'

export const GlobalChordsContext = createContext<IGlobalChords>({
    globalChords: [],
})

const GlobalChordsProvider = ({ children }: { children: React.ReactNode }) => {
    const [chords, setChords] = useState<IGlobalChords>({
        globalChords: [],
    })

    useEffect(() => {
        if (!chords)
            fetch('api/global-chords', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json().then((data) => setChords(data)))
    })

    return (
        <GlobalChordsContext.Provider value={chords}>
            {children}
        </GlobalChordsContext.Provider>
    )
}

export { GlobalChordsProvider }
