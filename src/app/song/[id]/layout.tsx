'use client'

import MenuBar from '@/components/menu-bar'

const SongLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MenuBar />
            {children}
        </div>
    )
}

export default SongLayout
