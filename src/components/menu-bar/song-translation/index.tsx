import { TranslationContext } from '@/app/providers/translation-provider'
import { FC, useContext } from 'react'

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
        <div className={`h-10 w-32 flex flex-row justify-between`}>
            <button
                className={`h-10 w-10 rounded-md duration-200 bg-slate-200 dark:bg-[#212933] dark:hover:text-[#212933] dark:text-slate-200 text-[#212933] hover:text-slate-200 hover:dark:bg-slate-200 hover:bg-[#212933]`}
                onClick={decrementTranslation}
            >
                <span className={'icon-[mdi--minus]'} />
            </button>
            <button
                className={`h-10 w-10 rounded-md duration-200 bg-slate-200 dark:bg-[#212933] dark:hover:text-[#212933] dark:text-slate-200 text-[#212933] hover:text-slate-200 hover:dark:bg-slate-200 hover:bg-[#212933]`}
                onClick={resetTranslation}
            >
                {translation}
            </button>
            <button
                className={`h-10 w-10 rounded-md duration-200 bg-slate-200 dark:bg-[#212933] dark:hover:text-[#212933] dark:text-slate-200 text-[#212933] hover:text-slate-200 hover:dark:bg-slate-200 hover:bg-[#212933]`}
                onClick={incrementTranslation}
            >
                <span className={'icon-[mdi--plus]'} />
            </button>
        </div>
    )
}

export default SongTranslation
