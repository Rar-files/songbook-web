import { IChord } from './IChord'

export interface IChordsSet {
    type:
        | 'verse'
        | 'chorus'
        | 'bridge'
        | 'intro'
        | 'outro'
        | 'pre-chorus'
        | 'post-chorus'
    chords: IChord[]
}
