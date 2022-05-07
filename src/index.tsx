import { Hono } from 'hono'
import Nano from 'nano-jsx'
import { poweredBy } from 'hono/powered-by'
import { getPosts, getPost } from './utils'
import { render } from './renderer'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

export const app = new Hono()

app.use('*', poweredBy())

app.get('/', async (c) => {
  const posts = await getPosts('bryce')
  const html = render(<Home posts={posts} />)
  return c.html(html)
})

app.get('/post/:id', async (c) => {
  const id = c.req.param('id')
  const post = await getPost(id)
  const html = render(<PostDetail post={post} />)
  return c.html(html)
})

app.fire()
