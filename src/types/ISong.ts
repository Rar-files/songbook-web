import { Category } from '@prisma/client'
import { IChordsSet } from './IChordsSet'
import { ILyricsSet } from './ILyricsSet'
import { IStructureElement } from './IStructureElement'

export interface ISong {
    id: number
    name: string
    categoryId: number
    category: Category
    structure: IStructureElement[]
    lyricsSets: ILyricsSet[]
    chordsSets: IChordsSet[]
}
