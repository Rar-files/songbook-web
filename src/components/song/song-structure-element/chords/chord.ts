import { GlobalChordsContext } from '@/app/providers/globalChordsProvider'
import { IChord } from '@/types/IChord'
import { useContext } from 'react'

type ChordProps = {
    chord: IChord
    modulation?: number
}

const Chord = ({ chord, modulation = 0 }: ChordProps) => {
    const globalChords = useContext(GlobalChordsContext)

    const songKey = globalChords.zeroKeyID + modulation

    return `${globalChords.chords[chord.tab][chord.id + songKey]} `
}

export default Chord
