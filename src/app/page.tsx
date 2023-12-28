'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

type SongData = {
    id: number
    name: string
}

const Dashboard: NextPage = () => {
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(`/api/song/list`, (...args) =>
        fetch(...args).then((res) => res.json())
    )
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div className="flex flex-col">
            <input
                className="p-2 w-3/4 max-w-60 h-8 m-2 mt-3"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-col m-3 mt-1">
                {(data as [])
                    .filter((value: SongData) =>
                        value.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((songData: SongData, index: number) => (
                        <Link key={index} href={`/song/${songData.id}`}>
                            <div className="mb-2">{songData.name}</div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Dashboard
