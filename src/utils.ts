import { withStyles } from 'nano-jsx'
import { minify } from 'csso'
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

export async function getCachedSlugById(id: number) {
  const post = await getPost(id)
  const slug = cleanSlug(post.slug)
  return slug
}

export function cleanSlug(slug: string): string {
  const indexOfLastDash = slug.split('').reverse().indexOf('-') + 1
  return slug.substr(0, slug.length - indexOfLastDash)
}

async function promiseAllSequential(promises: Array<Promise>):Promise<Array> {
  if (promises.length === 0) return []
  const [firstElement, ...rest] = promises
  return [await firstElement, ...(await promiseAllSequential(rest))]
}

const sleep = amount => new Promise(resolve => setTimeout(resolve, amount))

export async function updateEdgeCache(password: string, username: string) {
  if (password === process.env.PASSWORD) {
    const posts = await getPosts(username)
    const newPosts = posts.map(post => ({
      ...post, cachedSlug: cleanSlug(post.slug)
    }))
    await POSTS.put('INDEX', JSON.stringify(newPosts))
    const promises = posts.map(async (post, i) => {
      await sleep(i * 1000)
      const postDetail = await getPost(post.id)
      const slug = cleanSlug(post.slug)
      console.log('Updated cache for', slug)
      await POSTS.put(slug, JSON.stringify({ ...postDetail, slug }))
    })
    promiseAllSequential(promises)
    return new Response(`Indexed ${posts.length} posts.`)
  } else {
    return new Response('Wrong password.')
  }
}

export function withMinifiedStyles(css) {
  return withStyles(minify(css).css)
}