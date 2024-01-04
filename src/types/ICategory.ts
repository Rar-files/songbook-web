import { ISong } from './ISong'

export interface ICategory {
    id: number
    name: string
    songs: ISong[]
}
