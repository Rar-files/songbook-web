import { IStructureElement } from '@/types/IStructureElement'
import { FC } from 'react'
import { ILyricsSet } from '@/types/ILyricsSet'
import { IChordsSet } from '@/types/IChordsSet'
import SSEHeader from './sse-header'
import SSELirycsChords from './sse-lirycs-chords'

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
                    <SSELirycsChords
                        key={index}
                        lyrics={lyricSet.lyrics}
                        chords={chordSet}
                    />
                ))}
        </div>
    )
}

export default SongStructureElement
