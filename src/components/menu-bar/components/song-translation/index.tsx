import { TranslationContext } from '@/app/providers/translation-provider'
import { FC, useContext } from 'react'
import MenuBtn from '../buttons/menu-btn'

const SongTranslation: FC = () => {
    const { translation, setTranslation } = useContext(TranslationContext)

    const incrementTranslation = () => {
        if (translation > 10) {
            resetTranslation()
            return
        }

        setTranslation(translation + 1)
    }

    const decrementTranslation = () => {
        if (translation < -10) {
            resetTranslation()
            return
        }

        setTranslation(translation - 1)
    }

    const resetTranslation = () => {
        setTranslation(0)
    }

    return (
        <>
            <MenuBtn onClick={decrementTranslation}>
                <span className={'icon-[mdi--minus]'} />
            </MenuBtn>
            <MenuBtn onClick={resetTranslation}>{translation}</MenuBtn>
            <MenuBtn onClick={incrementTranslation}>
                <span className={'icon-[mdi--plus]'} />
            </MenuBtn>
        </>
    )
}

export default SongTranslation
