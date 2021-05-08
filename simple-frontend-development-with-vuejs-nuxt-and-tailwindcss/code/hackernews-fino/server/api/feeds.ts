import { baseUrl } from '.' 

import axios from 'axios'
import { fetchItem, Item } from './items'

export async function fetchFeed(feed:string, page: number = 1): Promise<Item[]> {
    return axios.get(`${baseUrl}/${feed}.json`)
        .then(response => {
            return Object.values(response.data)
                .slice((page - 1) * 10, (page-1) * 10 + 10) as string[]
        })
        .then(entries => Promise.all(entries.map(id => fetchItem(id))))
}
