import Nano, { withStyles } from 'nano-jsx'
import type { PostType } from '../types'

export default function ListPost({ post }: { post: PostType }) {
  const date = new Date(post.published_at)
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date)

  const css = `
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    li {
      margin: calc(var(--gap) * 1.5) 0;
      list-style-type: none;
    }

    h2 {
      margin: 0;
    }
    
    time {
      color: var(--text-main);
      border-radius: var(--radius);
    }

    p {
      margin: var(--gap) calc(var(--gap) * 4) var(--gap) var(--gap);
    }
  `

  return withStyles(css)(
    <li>
      <div>
        <h2>
          <a href={`/post/${post.id}`}>{post.title}</a>
        </h2>
        <time datetime={post.published_at}>{formattedDate}</time>
      </div>
      <p><i>{post.description}</i></p>
    </li>
  )
}