import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostDetailType } from '../types'
import codeStyles from '../styles/codeStyles'
import embedStyles from '../styles/embedStyles'
import PostNavigation from './PostNavigation'

export default function PostDetail({ post, slug }: { post: PostDetailType, slug: string }) {
  const date = new Date(post.published_at)
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)

  const css = `
    h1 {
      margin-bottom: var(--gap);
      font-size: 2.2em;
    }

    a {
      color: var(--text-bright);
    }

    a:hover {
      text-decoration: none;
    }

    h3 {
      color: var(--text-muted);
      margin: 0 0 calc(var(--gap)/2) 0;
      font-weight: normal;
    }

    #cover {
      margin-top: calc(var(--gap)*2);
    }

    #cover img {
      border-radius: var(--radius);
      box-shadow: 0 0 calc(var(--gap)/2) var(--button-base);
    }

    #content {
      margin-bottom: calc(var(--gap) * 4);
    }

    ${codeStyles}
    ${embedStyles}
  `

  return withMinifiedStyles(css)(
    <>
      <PostNavigation slug={slug} />
      {post.cover_image && <a href={post.url} id="cover"><img src={post.cover_image} alt={`Cover image for ${post.title}`} /></a>}
      <h1><a href={post.url}>{post.title}</a></h1>
      <h3>{formattedDate}</h3>
      <div id="content" innerHTML={{ __dangerousHtml: post.body_html }} />
      <PostNavigation slug={slug} />
    </>
  )
}
