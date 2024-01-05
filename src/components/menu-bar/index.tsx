'use client'

import { FC } from 'react'
import ToggleDarkModeBtn from './components/buttons/toggle-dark-mode-btn'
import MenuBarCol from './components/menu-bar-col'
import { usePathname } from 'next/navigation'
import SongTranslation from './components/song-translation'
import Logo from '@/components/menu-bar/components/logo'

const MenuBar: FC = () => {
    const path = usePathname()

    return (
        <div className={`h-14 w-full`}>
            <div
                className={`fixed h-14 w-full p-2 flex flex-row bg-slate-200 dark:bg-slate-800 justify-between shadow-xl`}
            >
                <MenuBarCol allign={'LEFT'}>
                    <Logo />
                </MenuBarCol>
                <MenuBarCol allign={'CENTER'}>
                    {path.includes('/song/') && <SongTranslation />}
                </MenuBarCol>
                <MenuBarCol allign={'RIGHT'}>
                    <ToggleDarkModeBtn />
                </MenuBarCol>
            </div>
        </div>
    )
}

export default MenuBar
