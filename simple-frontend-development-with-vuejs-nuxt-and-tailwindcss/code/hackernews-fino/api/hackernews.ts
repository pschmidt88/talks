import axios from 'axios'

const baseUrl: string = "https://hacker-news.firebaseio.com/v0"

export interface Item {
  id: number
  url?: string
  title?: string
  type: 'job' | 'story' | 'comment' | 'poll'
  score: number
  by: string
  text?: string
  time: string
  kids?: Item[]
}

export async function fetchItem(id: string): Promise<Item> {
  return axios.get(`${baseUrl}/item/${id}.json`)
    .then(response => response.data)
}

export async function fetchFeed(feed: string): Promise<Item[]> {
  return axios.get(`${baseUrl}/${feed}.json`)
    .then(response => {
      return Object.values(response.data).slice(0, 15) as string[]
    })
    .then(ids => Promise.all(ids.map(id => fetchItem(id))))
}
