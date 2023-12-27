'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'

const Dashboard: NextPage = () => {
    const { data, error, isLoading } = useSWR(`/api/song/list`, (...args) =>
        fetch(...args).then((res) => res.json())
    )
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div className="flex flex-col m-4">
            {data.map((songName: string, index: number) => (
                <Link key={index} href={`/song/${index}`}>
                    <div className="mb-2">{songName}</div>
                </Link>
            ))}
        </div>
    )
}

export default Dashboard
