import { globalChords } from '@/data/global-chords'
import { TranslationContext } from '@/services/providers/translation-provider'
import { IChord } from '@/types/IChord'
import { useContext } from 'react'

type ChordProps = {
    chord: IChord
}

const Chord = ({ chord }: ChordProps) => {
    const { translation } = useContext(TranslationContext)

    const songKey = globalChords.zeroKeyID + translation

    return `${globalChords.chords[chord.tab][chord.id + songKey]} `
}

export default Chord
