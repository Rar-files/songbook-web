import { IChord } from '@/types/IChord'
import { FC } from 'react'
import Chord from './chord'

type ChordLineProps = {
    chordLine: IChord[]
}

const ChordsLine: FC<ChordLineProps> = ({ chordLine }) => {
    return <span>{chordLine.map((chord) => Chord({ chord }))}</span>
}

export default ChordsLine
