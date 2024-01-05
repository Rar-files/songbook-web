import type { Metadata } from 'next'

import '@/styles/tailwind.css'
import '@/styles/globalHTMLElements.css'
import MenuBar from '@/components/menu-bar'
import { Providers } from '@/services/providers'

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`bg-slate-100 dark:bg-slate-900`}>
                <Providers>
                    <MenuBar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
