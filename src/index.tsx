import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import Nano from 'nano-jsx'
import { getCachedPosts, getCachedPost, cacheIndex, cachePost, refreshPost, cleanSlug } from './utils'
import { render, renderFeed } from './renderer'
import Home from './pages/Home'
import Post from './pages/Post'
import { USERNAME, PAGE_SIZE } from './consts'

export const app = new Hono()

app.use('*', poweredBy())

app.get('/', async (c) => {
  const posts = await getCachedPosts()
  const page = posts?.slice(0, PAGE_SIZE)
  const defaultPageInfo = { pageNumber: 0, isFirstPage: true, isLastPage: posts?.length <= PAGE_SIZE }
  const html = await render(<Home posts={page} pageInfo={defaultPageInfo} />)
  return c.html(html)
})

app.get('/page/:pageNumber', async (c) => {
  const pageNumber = Number(c.req.param('pageNumber')) || 0
  const posts = await getCachedPosts()
  const pageStart = pageNumber * PAGE_SIZE
  const pageEnd = pageStart + PAGE_SIZE
  const page = posts?.slice(pageStart, pageEnd)
  const isFirstPage = pageNumber === 0
  const isLastPage = pageEnd >= posts?.length
  const html = await render(<Home posts={page} pageInfo={{ pageNumber, isFirstPage, isLastPage}} />)
  return c.html(html)
})

app.get('/post/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const slug = await cachePost(id)
  return c.redirect(`/${slug}`, 301)
})

app.get('/update/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const password = c.req.query('password')
  return await refreshPost(password, id)
})

app.get('/back/:slug', async (c) => {
  const slug = c.req.param('slug')
  const posts = await getCachedPosts()
  const postIndex = posts.findIndex(({ cachedSlug }: { cachedSlug?: string }) => cachedSlug === slug)
  const pageNumber = Math.floor(postIndex / PAGE_SIZE)
  return c.redirect(`/page/${pageNumber}`, 301)
})

app.get('/update', async (c) => {
  const password = c.req.query('password')
  return await cacheIndex(password, USERNAME)
})

app.get('/favicon.ico', (c) => new Response())

app.get('/:slug', async (c) => {
  const slug = c.req.param('slug')
  const post = await getCachedPost(slug)
  const html = await render(<Post post={post} slug={slug} />)
  return c.html(html)
})

app.get(`/${USERNAME}/:slug`, async (c) => {
  const slug = cleanSlug(c.req.param('slug'))
  return c.redirect(slug, 301)
})

app.get('/rss', async (c) => {
  const posts = await getCachedPosts()
  const rss = await renderFeed(posts)
  return c.body(rss, 200, { 'content-type': 'application/rss+xml' })
})

app.fire()
