import { IStructureElement } from '@/types/IStructureElement'
import { FC } from 'react'
import Lyrics from './lyrics'
import { ILyricsSet } from '@/types/ILyricsSet'
import { IChordsSet } from '@/types/IChordsSet'
import SSEHeader from './sse-header'
import Chords from './chords'

type SongSEProps = {
    structureElement: IStructureElement
    lyricsSets: ILyricsSet[]
    chordsSets: IChordsSet[]
}

const SongStructureElement: FC<SongSEProps> = ({
    structureElement,
    lyricsSets,
    chordsSets,
}) => {
    const lyricSet = lyricsSets[structureElement.lyricSet]
    const chordSet = chordsSets[structureElement.chordSet]

    return (
        <div>
            <SSEHeader text={lyricSet.header} />
            {Array(structureElement.multiple)
                .fill(true)
                .map((item, index) => (
                    <div key={index} className={`flex flex-row mb-5`}>
                        <Lyrics lyrics={lyricSet.lyrics} />
                        <Chords chords={chordSet} />
                    </div>
                ))}
        </div>
    )
}

export default SongStructureElement
