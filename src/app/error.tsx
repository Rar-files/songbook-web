'use client'

type props = {
    message?: string
}

const Error = ({ message }: props) => {
    return (
        <div>
            <h1>{message ? message : 'Failed to load'}</h1>
        </div>
    )
}

export default Error
