'use client'

import Song from '@/components/song'
import { NextPage } from 'next'
import useSWR from 'swr'

const SongPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const { data, error, isLoading } = useSWR(`/api/song/`, (...args) =>
        fetch(...args).then((res) => res.json())
    )

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <Song song={data[params.id]} />
}

export default SongPage
