import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import Nano from 'nano-jsx'
import { getCachedPosts, getCachedPost, cacheIndex, cachePost, refreshPost } from './utils'
import { render } from './renderer'
import Home from './pages/Home'
import Post from './pages/Post'

export const app = new Hono()

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
  return await cacheIndex(password, 'bryce')
})

app.get('/favicon.ico', (c) => new Response())

app.get('/:slug', async (c) => {
  const slug = c.req.param('slug')
  const post = await getCachedPost(slug)
  const html = await render(<Post post={post} />)
  return c.html(html)
})

app.fire()
