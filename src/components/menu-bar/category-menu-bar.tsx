import { FC } from 'react'
import HomeBtn from './components/buttons/home-btn'
import MenuBarLayout from './components/menu-bar-layout'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'

const CategoryMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <HomeBtn />
            <ToggleDarkModeBtn />
        </MenuBarLayout>
    )
}

export default CategoryMenuBar
