'use client'

import { IGlobalChords } from '@/types/IGlobalChords'
import { createContext } from 'react'
import useSWR from 'swr'

export const GlobalChordsContext = createContext<IGlobalChords>({
    zeroKeyID: 0,
    chords: [],
})

const GlobalChordsProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, error, isLoading } = useSWR('/api/global-chords', (...args) =>
        fetch(...args).then((res) => res.json())
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <GlobalChordsContext.Provider value={data}>
            {children}
        </GlobalChordsContext.Provider>
    )
}

export { GlobalChordsProvider }
