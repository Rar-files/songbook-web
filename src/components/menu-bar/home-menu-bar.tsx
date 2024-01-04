import { FC } from 'react'
import MenuBarLayout from './components/menu-bar-layout'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'
import MenuBarCol from './components/menu-bar-col'

const HomeMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <MenuBarCol allign={'LEFT'}>
                <span className={`text-2xl`}>Spiewnik</span>
            </MenuBarCol>
            <MenuBarCol allign={'CENTER'}></MenuBarCol>
            <MenuBarCol allign={'RIGHT'}>
                <ToggleDarkModeBtn />
            </MenuBarCol>
        </MenuBarLayout>
    )
}

export default HomeMenuBar
