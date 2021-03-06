import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostDetailType } from '../types'
import codeStyles from '../styles/codeStyles'
import embedStyles from '../styles/embedStyles'
import PostNavigation from './PostNavigation'

export default function PostDetail({ post }: { post: PostDetailType }) {
  const date = new Date(post.published_at)
  const options = { month: 'long', day: 'numeric', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)

  const css = `
    h1 {
      margin-bottom: var(--gap);
      font-size: 3em;
    }

    h3 {
      color: var(--text-muted);
      margin: 0 0 calc(var(--gap)/2) 0;
    }

    hr {
      width: 100%;
    }

    #cover {
      margin-top: calc(var(--gap)*2);
      border-radius: var(--radius);
      box-shadow: 0 0 calc(var(--gap)/2) var(--button-base);
    }

    code {
      position: relative;
      top: -1px;
    }

    ${codeStyles}
    ${embedStyles}
  `

  return withMinifiedStyles(css)(
    <>
      <PostNavigation />
      {post.cover_image && <img id="cover" src={post.cover_image} alt={`Cover image for ${post.title}`} />}
      <h1>{post.title}</h1>
      <h3>Posted to <a href={post.url} target="_blank">dev.to</a> on {formattedDate}</h3>
      <hr />
      <div id="content" innerHTML={{ __dangerousHtml: post.body_html }} />
      <PostNavigation />
    </>
  )
}
