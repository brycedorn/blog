import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostDetailType } from '../types'
import codeStyles from '../styles/codeStyles'
import embedStyles from '../styles/embedStyles'
import PostNavigation from './PostNavigation'

export default function PostDetail({ post, pageNumber, thumbhash }: { post: PostDetailType, pageNumber: number, thumbhash: string }) {
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
      display: flex;
    }

    #cover img {
      border-radius: var(--radius);
    }

    #content {
      margin-bottom: calc(var(--gap) * 4);
    }

    .blur-up {
      filter: blur(5px);
      transition: filter var(--unblur-duration);
    }

    .blur-up.lazyloaded {
      filter: blur(0);
    }

    .behind {
      aspect-ratio: 50 / 21;
      width: 100%;
      z-index: 1;
      overflow: hidden;
    }

    .blur-container {
      position: absolute;
      left: 0;
      z-index: 2;
      overflow: hidden;
      margin: 0 calc(var(--gap)/4) calc(var(--gap)/4) calc(var(--gap)/4);
    }

    ${codeStyles}
    ${embedStyles}
  `

  return withMinifiedStyles(css)(
    <>
      <PostNavigation pageNumber={pageNumber} />
      {post.cover_image && <a href={post.url} id="cover" aria-label="Read article on dev.to">
        <img class="behind" src={thumbhash} width={788} height={331} alt="Placeholder for post cover image" />
        <div class="blur-container">
          <img class="lazyload blur-up" data-src={post.cover_image} width={788} height={331} alt="Cover image for post" />
        </div>
      </a>}
      <h1><a href={post.url} aria-label="Read article on dev.to">{post.title}</a></h1>
      <h3>{formattedDate}</h3>
      <div id="content" innerHTML={{ __dangerousHtml: post.body_html }} />
      <PostNavigation pageNumber={pageNumber} />
    </>
  )
}
