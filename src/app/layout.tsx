import { Providers } from './providers'
import type { Metadata } from 'next'

import '@/styles/tailwind.css'
import '@/styles/globalHTMLElements.css'

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
