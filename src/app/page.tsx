'use client'

import { useListSorter } from '@/hooks/useListSorter'
import { IListElement } from '@/types/IListElement'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import Loading from './loading'
import Error from './error'

interface CategoryListElement extends IListElement {}

const Dashboard: NextPage = () => {
    const { ListSort } = useListSorter()
    const [search, setSearch] = useState('')
    const { data, error, isLoading } = useSWR(`/api/category`, (...args) =>
        fetch(...args).then((res) => res.json())
    )

    if (error) return <Error />
    if (isLoading) return <Loading />

    const categories = data as CategoryListElement[]
    const dataToShow = ListSort(categories)

    return (
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
                        value.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((category: CategoryListElement, index: number) => (
                        <Link key={index} href={`/category/${category.id}`}>
                            <div className="mb-2">{category.name}</div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Dashboard
