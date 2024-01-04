import { GlobalChordsContext } from '@/app/providers/global-chords-provider'
import { TranslationContext } from '@/app/providers/translation-provider'
import { IChord } from '@/types/IChord'
import { useContext } from 'react'

type ChordProps = {
    chord: IChord
}

const Chord = ({ chord }: ChordProps) => {
    const globalChords = useContext(GlobalChordsContext)
    const { translation } = useContext(TranslationContext)

    const songKey = globalChords.zeroKeyID + translation

    return `${globalChords.chords[chord.tab][chord.id + songKey]} `
}

export default Chord
