'use client'

import LinkTo from '@/components/link-to'
import HomeMenuBar from '@/components/menu-bar/home-menu-bar'
import { useListSorter } from '@/hooks/useListSorter'
import { IListElement } from '@/types/IListElement'
import type { NextPage } from 'next'
import { useState } from 'react'
import useSWR from 'swr'

interface CategoryListElement extends IListElement {}

const Dashboard: NextPage = () => {
    const { ListSort } = useListSorter()
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(`/api/category`, (...args) =>
        fetch(...args).then((res) => res.json())
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const categories = data as CategoryListElement[]
    const dataToShow = ListSort(categories)

    return (
        <>
            <HomeMenuBar />
            <div className="flex flex-col">
                <input
                    className={`p-2 rounded-md w-3/4 max-w-60 h-8 m-2 mt-3 bg-slate-200 dark:bg-slate-700 placeholder:dark:text-slate-300 placeholder:text-[#2f3b49] `}
                    type="text"
                    placeholder="Szukaj..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex flex-col m-3 mt-1">
                    {dataToShow
                        .filter((value: CategoryListElement) =>
                            value.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .map((category: CategoryListElement, index: number) => (
                            <LinkTo
                                key={index}
                                href={`/category/${category.id}`}
                            >
                                <div className="mb-2">{category.name}</div>
                            </LinkTo>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
