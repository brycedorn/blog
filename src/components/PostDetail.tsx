import Nano, { Fragment, withStyles } from 'nano-jsx'
import type { PostDetailType } from '../types'

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
      border-radius: 6px;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .top {
      margin-bottom: var(--gap);
    }

    .bottom {
      margin-top: calc(var(--gap) * 4);
    }
  `

  const Navigation = ({ position }) => (
    <div class={`flex ${position}`}>
      <a href="/">
        <button>Back</button>
      </a>
      <div>
        <span>Read original post on </span>
        <a href={post.url}>dev.to</a>.
      </div>
    </div>
  )

  return withStyles(css)(
    <>
      <Navigation position="top" />
      {post.cover_image && <img src={post.cover_image} alt={`Cover image for ${post.title}`} />}
      <h1>{post.title}</h1>
      <h3>Posted on {formattedDate}</h3>
      <div innerHTML={{ __dangerousHtml: post.body_html }} />
      <Navigation position="bottom" />
    </>
  )
}
