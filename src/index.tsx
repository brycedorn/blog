import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import Nano from 'nano-jsx'
import { getCachedPosts, getCachedPost, updateEdgeCache, updateEdgeCacheForPost } from './utils'
import { render } from './renderer'
import Home from './pages/Home'
import Post from './pages/Post'

export const app = new Hono()

app.use('*', poweredBy())

app.get('/', async (c) => {
  const posts = await getCachedPosts()
  const html = render(<Home posts={posts} />)
  return c.html(html)
})

app.get('/post/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const slug = await updateEdgeCacheForPost(id)
  return c.redirect(`/${slug}`, 301)
})

app.get('/update', async (c) => {
  const password = c.req.query('password')
  const response = await updateEdgeCache(password, 'bryce')
  return response
})

app.get('/favicon.ico', (c) => new Response())

app.get('/:slug', async (c) => {
  const slug = c.req.param('slug')
  const post = await getCachedPost(slug)
  const html = render(<Post post={post} />)
  return c.html(html)
})

app.fire()
