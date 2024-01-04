import { FC } from 'react'
import HomeBtn from './components/buttons/home-btn'
import MenuBarLayout from './components/menu-bar-layout'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'
import MenuBarCol from './components/menu-bar-col'

const CategoryMenuBar: FC = () => {
    return (
        <MenuBarLayout>
            <MenuBarCol allign={'LEFT'}>
                <HomeBtn />
            </MenuBarCol>
            <MenuBarCol allign={'CENTER'}></MenuBarCol>
            <MenuBarCol allign={'RIGHT'}>
                <ToggleDarkModeBtn />
            </MenuBarCol>
        </MenuBarLayout>
    )
}

export default CategoryMenuBar
