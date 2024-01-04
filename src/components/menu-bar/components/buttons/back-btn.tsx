'use client'

import { FC } from 'react'
import { getCookie } from 'cookies-next'
import LinkTo from '@/components/link-to'
import MenuBtn from './menu-btn'

const BackBtn: FC = () => {
    let lastPath = getCookie('lastPath')

    if (!lastPath) lastPath = '/'

    return (
        <LinkTo href={lastPath}>
            <MenuBtn>
                <span className={'icon-[mdi--chevron-left]'} />
            </MenuBtn>
        </LinkTo>
    )
}

export default BackBtn
