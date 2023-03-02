import { withStyles } from 'nano-jsx'
import { minify } from 'csso'
import type { PostType, PostDetailType } from './types'
import { API_URL, fetchOpts } from './consts'

export async function getPosts(username: string): Promise<PostType[]> {
  const url = `${API_URL}/articles?username=${username}`
  const response = await fetch(url, fetchOpts)
  return await response.json()
}

export async function getPost(id: number): Promise<PostDetailType> {
  const url = `${API_URL}/articles/${id}`
  const response = await fetch(url, fetchOpts)
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
  return slug.substring(0, slug.length - indexOfLastDash)
}

export async function cacheIndex(password: string, username: string) {
  if (password === process.env.PASSWORD) {
    const posts = await getPosts(username)
    const cachedPosts = await getCachedPosts()
    const isCached = (postId: number) => cachedPosts?.find(cachedPost => (
      cachedPost.id === postId && cachedPost.cachedSlug
    ))
    const newCachedPosts = posts.map(post => ({
      ...post, cachedSlug: isCached(post.id) ? cleanSlug(post.slug) : null
    }))
    const numCached = newCachedPosts.filter(({ cachedSlug }) => cachedSlug).length
    await POSTS.put('INDEX', JSON.stringify(newCachedPosts))
    return new Response(`Indexed ${posts.length} posts, ${numCached} were already cached.`)
  } else {
    return new Response('Wrong password.')
  }
}

export async function cachePost(id: number) {
  const post = await getPost(id)
  const slug = cleanSlug(post.slug)
  await POSTS.put(`${slug}`, JSON.stringify({ ...post, slug }))
  const posts = await getCachedPosts()
  const cachedPostIndex = posts.map(p => p.id).indexOf(id)
  posts[cachedPostIndex].cachedSlug = slug
  await POSTS.put('INDEX', JSON.stringify(posts))
  return slug
}

export async function refreshPost(password: string, id: number) {
  if (password === process.env.PASSWORD) {
    const slug = await cachePost(id)
    return new Response(`Updated ${slug}`)
  } else {
    return new Response('Wrong password.')
  }
}

export function withMinifiedStyles(css: string) {
  return withStyles(minify(css).css)
}

export function removeEmoji(s: string) {
  return s.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
}