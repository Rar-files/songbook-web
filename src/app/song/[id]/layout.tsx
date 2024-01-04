'use client'

import SongMenuBar from '@/components/menu-bar/song-menu-bar'

const SongLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SongMenuBar />
            {children}
        </div>
    )
}

export default SongLayout
