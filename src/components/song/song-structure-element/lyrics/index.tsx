import { FC } from 'react'
import LyricsLine from './lyrics-line'

type LyricsProps = {
    lyrics: string[]
}

const Lyrics: FC<LyricsProps> = ({ lyrics }) => {
    return (
        <div className={`flex flex-col w-3/4`}>
            {lyrics.map((lyricsLine, index) => (
                <LyricsLine key={index} lyricsLine={lyricsLine} />
            ))}
        </div>
    )
}

export default Lyrics
