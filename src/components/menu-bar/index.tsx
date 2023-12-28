import { FC } from 'react'
import HomeBtn from './home-btn'
import SongTranslation from './song-translation'

const MenuBar: FC = () => {
    return (
        <div
            className={`h-14 w-100% p-2 flex flex-row border-b-2 border-solid border-black justify-between`}
        >
            <HomeBtn />
            <SongTranslation />
            <div></div>
        </div>
    )
}

export default MenuBar
