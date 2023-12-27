import { IChordsSet } from '@/types/IChordsSet'
import { FC } from 'react'
import ChordsLine from './chords-line'

type ChordsProps = {
    chords: IChordsSet
}

const Chords: FC<ChordsProps> = ({ chords }) => {
    return (
        <div className={`flex flex-col w-1/4`}>
            {chords.chords.map((chordLine, index) => (
                <ChordsLine key={index} chordLine={chordLine} />
            ))}
        </div>
    )
}

export default Chords
