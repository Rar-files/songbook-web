import { FC } from 'react'
import { IChordsSet } from '@/types/IChordsSet'
import SSELine from './sse-line'

type LyricsProps = {
    lyrics: string[]
    chords: IChordsSet
}

const SSELirycsChords: FC<LyricsProps> = ({ lyrics, chords }) => {
    return (
        <div className={`flex flex-col mb-5`}>
            {lyrics.map((lyricsLine, index) => (
                <SSELine
                    key={index}
                    lyricsLine={lyricsLine}
                    chordLine={chords.chords[index]}
                />
            ))}
        </div>
    )
}

export default SSELirycsChords
