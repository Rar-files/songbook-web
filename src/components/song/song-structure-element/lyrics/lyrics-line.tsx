import { FC } from 'react'

type LyricsLineProps = {
    lyricsLine: string
}

const LyricsLine: FC<LyricsLineProps> = ({ lyricsLine }) => {
    return <span>{lyricsLine}</span>
}

export default LyricsLine
