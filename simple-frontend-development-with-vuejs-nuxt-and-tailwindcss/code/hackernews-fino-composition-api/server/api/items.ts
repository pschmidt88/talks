import { baseUrl } from '.'
import axios from 'axios'

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
  return axios.get(`${baseUrl}/item/${id}.json`).then(response => response.data)
}
