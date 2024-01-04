'use client'

import { useListSorter } from '@/hooks/useListSorter'
import { IListElement } from '@/types/IListElement'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

interface SongListElement extends IListElement {}

type CategorySongs = {
    id: number
    name: string
    songs: SongListElement[]
}

const CategorySongsList: NextPage<{ params: { id: string } }> = ({
    params,
}) => {
    const { ListSort } = useListSorter()
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(
        `/api/category/${params.id}/songs`,
        (...args) => fetch(...args).then((res) => res.json())
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const categorySongsData = data as CategorySongs
    const dataToShow = ListSort(categorySongsData.songs)

    return (
        <div className="flex flex-col">
            <div className="text-2xl m-3 mb-1">{categorySongsData.name}</div>
            <input
                className={`p-2 rounded-md w-3/4 max-w-60 h-8 m-2 mt-3 bg-slate-200 dark:bg-slate-700 placeholder:dark:text-slate-300 placeholder:text-[#2f3b49] `}
                type="text"
                placeholder="Szukaj..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-col m-3 mt-1">
                {dataToShow
                    .filter((value: SongListElement) =>
                        value.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((song: SongListElement, index: number) => (
                        <Link key={index} href={`/song/${song.id}`}>
                            <div className="mb-2">{song.name}</div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default CategorySongsList
