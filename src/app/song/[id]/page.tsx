'use client'

import Loading from '@/app/loading'
import Error from '@/app/error'
import Song from '@/components/song'
import { NextPage } from 'next'
import useSWR from 'swr'

const SongPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const { data, error, isLoading } = useSWR(`/api/song/${params.id}`)

    if (error) return <Error />
    if (isLoading) return <Loading />

    return <Song song={data} />
}

export default SongPage
