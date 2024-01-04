'use client'

import CategoryMenuBar from '@/components/menu-bar/category-menu-bar'

const SongLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <CategoryMenuBar />
            {children}
        </div>
    )
}

export default SongLayout
