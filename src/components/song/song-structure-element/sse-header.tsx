import { FC } from 'react'

interface SSEHeaderProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string
}

const SSEHeader: FC<SSEHeaderProps> = ({ text, ...props }) => {
    return <div {...props}>{`${text}:`}</div>
}

export default SSEHeader
