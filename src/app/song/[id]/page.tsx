'use client'

import { GlobalChordsContext } from '@/app/providers/globalChordsProvider'
import { ISong } from '@/types/ISong'
import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'

const Song: NextPage = () => {
    const [song, setSong] = useState<ISong | null>(null)
    const globalChords = useContext(GlobalChordsContext)

    useEffect(() => {
        if (!song)
            fetch('localhost:3000/api/song/0', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json().then((data) => setSong(data)))
    })

    return (
        <>
            {song && globalChords && (
                <div className={`flex flex-col m-3`}>
                    {song.name}
                    <div className={`flex flex-col`}>
                        {song.structure.map((structureElement, index) => (
                            <div
                                key={`${song.name} + ${index}`}
                                className={`mt-5`}
                            >
                                <span>
                                    {
                                        song.lyricsSets[
                                            structureElement.lyricSet
                                        ].header
                                    }
                                </span>
                                <div className={`flex`}>
                                    <div className={`flex flex-col w-3/4`}>
                                        {song.lyricsSets[
                                            structureElement.lyricSet
                                        ].lyrics.map((lyricsLine, index) => (
                                            <span key={index}>
                                                {lyricsLine}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={`flex flex-col w-1/4`}>
                                        {song.chordsSets[
                                            structureElement.chordSet
                                        ].chords.map((chordLine, index) => (
                                            <span key={index}>
                                                {chordLine.map(
                                                    (chord) =>
                                                        `${
                                                            globalChords
                                                                .globalChords[
                                                                chord.tab
                                                            ][chord.id]
                                                        } `
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Song
