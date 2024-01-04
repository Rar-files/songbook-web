'use client'

const MenuBarLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`h-14 w-full p-2 flex flex-row bg-slate-200 dark:bg-slate-800 justify-between shadow-xl`}
        >
            {children}
        </div>
    )
}

export default MenuBarLayout
