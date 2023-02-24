import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import Nano from 'nano-jsx'
import { getCachedPosts, getCachedPost, cacheIndex, cachePost, refreshPost, cleanSlug } from './utils'
import { render, renderFeed } from './renderer'
import Home from './pages/Home'
import Post from './pages/Post'

export const app = new Hono()

const USERNAME = 'bryce'

app.use('*', poweredBy())

app.get('/', async (c) => {
  const posts = await getCachedPosts()
  const html = await render(<Home posts={posts} />)
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

app.get('/favicon.ico', (c) => new Response())

app.get('/:slug', async (c) => {
  const slug = c.req.param('slug')
  const post = await getCachedPost(slug)
  const html = await render(<Post post={post} />)
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
