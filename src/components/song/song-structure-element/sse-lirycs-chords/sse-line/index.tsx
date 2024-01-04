import { FC } from 'react'
import LyricsLine from './lyrics-line'
import ChordsLine from './chords-line'
import { IChord } from '@/types/IChord'

type SSELineProps = {
    lyricsLine: string
    chordLine: IChord[]
}

const SSELine: FC<SSELineProps> = ({ lyricsLine, chordLine }) => {
    return (
        <div className={`flex flex-row`}>
            <div className={`flex flex-col w-3/4`}>
                <LyricsLine lyricsLine={lyricsLine} />
            </div>
            <div className={`flex flex-col w-1/4`}>
                <ChordsLine chordLine={chordLine} />
            </div>
        </div>
    )
}

export default SSELine
