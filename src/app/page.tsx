'use client'

import type { NextPage } from 'next'
import Song from '@/components/song'
import useSWR from 'swr'

const Dashboard: NextPage = () => {
    const { data, error, isLoading } = useSWR('/api/song/0', (...args) =>
        fetch(...args).then((res) => res.json())
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <Song song={data} />
}

export default Dashboard
