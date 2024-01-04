'use client'

import LinkTo from '@/components/link-to'
import { FC } from 'react'
import MenuBtn from './menu-btn'

const HomeBtn: FC = () => {
    return (
        <LinkTo href={`/`}>
            <MenuBtn>
                <span className={'icon-[mdi--home]'} />
            </MenuBtn>
        </LinkTo>
    )
}

export default HomeBtn
