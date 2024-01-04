import { IListElement } from '@/types/IListElement'

const useListSorter = () => {
    const ListSort = (data: IListElement[]) => {
        if (!data) return []
        return data.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if (nameA == 'inne' || nameA == 'other') return 1
            if (nameB == 'inne' || nameB == 'other') return -1
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })
    }

    return { ListSort }
}

export { useListSorter }
