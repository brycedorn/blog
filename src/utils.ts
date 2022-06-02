import type { PostType, PostDetailType } from './types'

const API_URL = 'https://dev.to/api'

const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
  cookie: process.env.COOKIE
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

export async function getCachedPosts(): Promise<PostType[]> {
  const response = await POSTS.get('INDEX')
  return JSON.parse(response)
}

export async function getCachedPost(slug: string): Promise<PostDetailType> {
  const response = await POSTS.get(`${slug}`)
  return JSON.parse(response)
}

export function cleanSlug(slug: string): string {
  const indexOfLastDash = slug.split('').reverse().indexOf('-') + 1
  return slug.substr(0, slug.length - indexOfLastDash)
}

export async function updateEdgeCache(password: string, username: string) {
  if (password === process.env.PASSWORD) {
    const posts = await getPosts(username)
    const modPosts = posts.map(post => ({ ...post, slug: cleanSlug(post.slug) }))
    await POSTS.put('INDEX', JSON.stringify(modPosts))
    return new Response(`Updating ${posts.length} posts...`)
  } else {
    return new Response('Wrong password.')
  }
}

export async function updateEdgeCacheForPost(id: number) {
  const post = await getPost(id)
  const slug = cleanSlug(post.slug)
  await POSTS.put(`${slug}`, JSON.stringify(post))

  const posts = await getCachedPosts()
  const cachedPostIndex = posts.map(p => p.id).indexOf(id)
  posts[cachedPostIndex].cachedSlug = slug
  await POSTS.put('INDEX', JSON.stringify(posts))
  return slug
}