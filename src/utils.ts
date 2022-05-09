import type { PostType, PostDetailType } from './types'

const API_URL = 'https://dev.to/api'

const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
}

const opts = {
  headers
}

export async function getPosts(username: string): Promise<PostType[]> {
  const url = `${API_URL}/articles?username=${username}`
  const response = await fetch(url, opts)
  return await response.json()
}

export async function getPost(id: string): Promise<PostDetailType> {
  const url = `${API_URL}/articles/${id}`
  const response = await fetch(url, opts)
  return await response.json()
}
