import { FC } from 'react'
import HomeBtn from './components/buttons/home-btn'
import SongTranslation from './components/song-translation'
import MenuBarLayout from './components/menu-bar-layout'
import BackBtn from './components/buttons/back-btn'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'
import MenuBarCol from './components/menu-bar-col'

const SongMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <MenuBarCol allign={'LEFT'}>
                <BackBtn />
                <HomeBtn />
            </MenuBarCol>
            <MenuBarCol allign={'CENTER'}>
                <SongTranslation />
            </MenuBarCol>
            <MenuBarCol allign={'RIGHT'}>
                <ToggleDarkModeBtn />
            </MenuBarCol>
        </MenuBarLayout>
    )
}

export default SongMenuBar
