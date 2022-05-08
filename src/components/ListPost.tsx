import Nano, { withStyles } from 'nano-jsx'
import type { PostType } from '../types'

export default function ListPost({ post }: { post: PostType }) {
  const date = new Date(post.published_at)

  const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear().toString().slice(2,4)}`

  const css = `
        div {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
        }

        li {
            list-style-type: none;
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
        <h2>{post.title}</h2>
        <time datetime={post.published_at}>{formattedDate}</time>
      </div>
      <blockquote>{post.description}</blockquote>
      <a href={`/post/${post.id}`}>
        <button>Read here</button>
      </a>
      <a href={post.url}>
        <button>Read on dev.to</button>
      </a>
    </li>
  )
}