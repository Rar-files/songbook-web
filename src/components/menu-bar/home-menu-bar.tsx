import { FC } from 'react'
import MenuBarLayout from './components/menu-bar-layout'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'

const HomeMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <div className={`h-10 flex items-center text-xl`}>Spiewnik</div>
            <ToggleDarkModeBtn />
        </MenuBarLayout>
    )
}

export default HomeMenuBar
