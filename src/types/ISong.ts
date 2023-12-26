import { IChordsSet } from './IChordsSet'
import { ILyricsSet } from './ILyricsSet'
import { IStructureElement } from './IStructureElement'

export interface ISong {
    name: string
    structure: IStructureElement[]
    lyricsSets: ILyricsSet[]
    chordsSets: IChordsSet[]
}
