import Nano from 'nano-jsx'
import type { Post } from '../types'
import { withStyles } from 'nano-jsx/lib/withStyles'

export default function ListPost({ post }: { post: Post }) {
    const date = new Date(post.published_at);

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
            <p>{post.description}</p>
            <a href={`/post/${post.id}`}>
                <button>Read here</button>
            </a>
            <a href={post.url}>
                <button>Read on dev.to</button>
            </a>
        </li>
    );
}