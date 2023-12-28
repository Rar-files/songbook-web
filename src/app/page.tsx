'use client'

import { ISong } from '@/types/ISong'
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
    const { data, error, isLoading } = useSWR(`/api/song`, (...args) =>
        fetch(...args).then((res) => res.json())
    )

    const sortData = (data: SongData[]) => {
        return data.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })
    }

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const songs = data as ISong[]
    const listOfSongsNamesAndIds = songs.map(
        (song) => ({ id: song.id, name: song.name }) as SongData
    )
    const dataToShow = sortData(listOfSongsNamesAndIds)

    return (
        <div className="flex flex-col">
            <input
                className={`p-2 rounded-md w-3/4 max-w-60 h-8 m-2 mt-3 bg-slate-200 dark:bg-[#212933] placeholder:dark:text-slate-300 placeholder:text-[#2f3b49] `}
                type="text"
                placeholder="Szukaj..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-col m-3 mt-1">
                {dataToShow
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
