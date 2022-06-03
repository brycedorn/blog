import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostDetailType } from '../types'
import codeStyles from '../styles/codeStyles'
import embedStyles from '../styles/embedStyles'

export default function PostDetail({ post }: { post: PostDetailType }) {
  const date = new Date(post.published_at)
  const options = { month: 'long', day: 'numeric', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)

  const css = `
    h1 {
      margin-bottom: var(--gap);
      font-size: 3em;
    }

    img {
      margin-top: var(--gap);
      border-radius: var(--radius);
    }

    #cover {
      box-shadow: 0 0 var(--gap) var(--background);
    }

    .flex {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    button {
      margin-bottom: 0;
      border-radius: var(--radius);
    }

    .top {
      margin-bottom: var(--gap);
      align-items: start;
    }

    .bottom {
      margin-top: calc(var(--gap) * 4);
      align-items: end;
    }

    code {
      position: relative;
      top: -1px;
    }

    ${codeStyles}
    ${embedStyles}
  `

  const Navigation = ({ position }) => (
    <div class={`flex ${position}`}>
      <a href="/">
        <button>Back</button>
      </a>
      <div>
        <span>Read original post on </span>
        <a href={post.url}>dev.to</a>
      </div>
    </div>
  )

  return withMinifiedStyles(css)(
    <>
      <Navigation position="top" />
      {post.cover_image && <img id="cover" src={post.cover_image} alt={`Cover image for ${post.title}`} />}
      <h1>{post.title}</h1>
      <h3>Posted on {formattedDate}</h3>
      <div innerHTML={{ __dangerousHtml: post.body_html }} />
      <Navigation position="bottom" />
    </>
  )
}
