import { withStyles } from 'nano-jsx'
import { minify } from 'csso'
import type { PostType, PostDetailType } from './types'
import { API_URL, fetchOpts } from './consts'
import { thumbHashToDataURL, rgbaToThumbHash } from 'thumbhash'
import { decode } from 'jpeg-js'
// @ts-expect-error esModuleInterop
import pica from 'pica'

export async function getPosts(username: string): Promise<PostType[]> {
  const url = `${API_URL}/articles?username=${username}&per_page=1000`
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

export async function cacheIndex(password?: string, username?: string) {
  if (password === process.env.PASSWORD && username) {
    const posts = await getPosts(username)
    const cachedPosts = await getCachedPosts()
    const isCached = (postId: number) =>
      cachedPosts?.find(
        (cachedPost) => cachedPost.id === postId && cachedPost.cachedSlug
      )
    const thumbhashes = await Promise.all(
      posts.map((post) => generateThumbhash(post.cover_image))
    )

    const newCachedPosts = posts.map((post, i) => ({
      ...post,
      cachedSlug: isCached(post.id) ? cleanSlug(post.slug) : null,
      thumbhash: thumbhashes[i],
    }))
    const numCached = newCachedPosts.filter(
      ({ cachedSlug }) => cachedSlug
    ).length
    await POSTS.put('INDEX', JSON.stringify(newCachedPosts))
    return new Response(
      `Indexed ${posts.length} posts, ${numCached} were already cached.`
    )
  } else {
    return new Response('Wrong password.')
  }
}

export async function cachePost(id: number) {
  const post = await getPost(id)
  const slug = cleanSlug(post.slug)
  await POSTS.put(`${slug}`, JSON.stringify({ ...post, slug }))
  const posts = await getCachedPosts()
  const cachedPostIndex = posts.map((p) => p.id).indexOf(id)
  posts[cachedPostIndex].cachedSlug = slug
  await POSTS.put('INDEX', JSON.stringify(posts))
  return slug
}

export async function refreshPost(password?: string, id?: number) {
  if (password === process.env.PASSWORD && id) {
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

export async function generateThumbhash(imageUrl: string) {
  if (!imageUrl || imageUrl.indexOf('gif') !== -1) {
    return ''
  }

  const thumbSize = 100

  const res = await fetch(imageUrl)
  const blob = await res.blob()
  const arrayBuf = await blob.arrayBuffer()
  const decoded = decode(arrayBuf, { useTArray: true })
  const { width, height, data } = decoded
  const imageWidth = Math.floor((width / height) * thumbSize)

  const resized = await pica().resizeBuffer({
    src: data,
    width,
    height,
    toWidth: imageWidth,
    toHeight: thumbSize,
  })

  // simple crop to 100:100
  const cropped = cropMid(resized, imageWidth, thumbSize)

  // generate thumbhash
  const thumbhash = rgbaToThumbHash(thumbSize, thumbSize, cropped)
  return thumbHashToDataURL(thumbhash)
}

// assuming >1 aspect ratio, crop to center
function cropMid(src: Uint8Array, width: number, newWidth: number) {
  const blockSize = 4 // rgba
  const dest = new Array(newWidth * newWidth * blockSize)
  const offset = Math.floor(width / 2 - newWidth / 2)

  for (let y = 0; y < newWidth * blockSize; y += blockSize) {
    for (let x = 0; x < (newWidth + offset) * blockSize; x += blockSize) {
      const sI = y * width + x + offset * blockSize
      const dI = y * newWidth + x

      new Array(blockSize).fill(null).forEach((_i, i) => {
        dest[dI + i] = src[sI + i]
      })
    }
  }

  return dest
}
