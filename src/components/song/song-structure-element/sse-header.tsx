import { FC } from 'react'

interface SSEHeaderProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string
}

const SSEHeader: FC<SSEHeaderProps> = ({ text }) => {
    return <div>{`${text}:`}</div>
}

export default SSEHeader
