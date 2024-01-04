import { FC } from 'react'
import HomeBtn from './components/buttons/home-btn'
import SongTranslation from './components/song-translation'
import MenuBarLayout from './components/menu-bar-layout'
import BackBtn from './components/buttons/back-btn'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'

const SongMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <div className="flex flex-row justify-start">
                <BackBtn />
                <HomeBtn />
            </div>
            <SongTranslation />
            <ToggleDarkModeBtn />
        </MenuBarLayout>
    )
}

export default SongMenuBar
