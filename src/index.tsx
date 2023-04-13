import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import Nano from 'nano-jsx'
import { getCachedPosts, getCachedPost, cacheIndex, cachePost, refreshPost, cleanSlug } from './utils'
import { render, renderFeed, renderRobotsTxt, renderSitemap } from './renderer'
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

app.get('/update', async (c) => {
  const password = c.req.query('password')
  return await cacheIndex(password, USERNAME)
})

app.get('/favicon.ico', () => new Response())

app.get('/:slug', async (c) => {
  const slug = c.req.param('slug')
  const post = await getCachedPost(slug)
  const posts = await getCachedPosts()
  const postIndex = posts.findIndex(({ cachedSlug }: { cachedSlug?: string }) => cachedSlug === slug)
  const thumbhash = posts[postIndex]?.thumbhash || ''
  const pageNumber = Math.floor(postIndex / PAGE_SIZE)
  const html = await render(<Post post={post} pageNumber={pageNumber} thumbhash={thumbhash} />, post)
  return c.html(html)
})

app.get(`/${USERNAME}/:path`, async (c) => {
  const slug = cleanSlug(c.req.param('path'))
  return c.redirect(slug, 301)
})

app.get('/rss', async (c) => {
  const posts = await getCachedPosts()
  const xml = await renderFeed(posts)
  return c.body(xml, 200, { 'content-type': 'application/rss+xml' })
})

app.get('/sitemap.xml', async (c) => {
  const posts = await getCachedPosts()
  console.log(posts)
  const xml = await renderSitemap(posts)
  return c.body(xml, 200, { 'content-type': 'application/xml' })
})

app.get('/robots.txt', (c) => {
  const txt = renderRobotsTxt()
  return c.text(txt)
})

app.fire()
