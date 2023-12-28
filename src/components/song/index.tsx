import { ISong } from '@/types/ISong'
import { FC } from 'react'
import SongStructureElement from './song-structure-element'

type SongProps = {
    song: ISong
}

const Song: FC<SongProps> = ({ song }) => {
    return (
        <div className={`flex flex-col m-3`}>
            <div className={`mb-5 text-xl`}>{song.name}</div>
            <div className={`flex flex-col`}>
                {song.structure.map((structureElement, index) => (
                    <SongStructureElement
                        key={index}
                        structureElement={structureElement}
                        chordsSets={song.chordsSets}
                        lyricsSets={song.lyricsSets}
                    />
                ))}
            </div>
        </div>
    )
}

export default Song
