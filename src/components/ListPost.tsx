import Nano, { withStyles } from 'nano-jsx'
import type { PostType } from '../types'

export default function ListPost({ post }: { post: PostType }) {
  const date = new Date(post.published_at)
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date)

  const css = `
        div {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
        }

        li {
            list-style-type: none;
        }

        h2 {
          margin-bottom: 0;
        }
        
        time {
            color: var(--text-bright);
        }

        blockquote {
            margin-right: calc(var(--gap) * 4);
        }
        
        a {
            cursor: pointer;
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
      <blockquote>{post.description}</blockquote>
    </li>
  )
}