import Nano from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostType } from '../types'
import { BLOG_URL } from '../consts'

export default function ListPost({ post }: { post: PostType }) {
  const date = new Date(post.published_at)
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date)
  const postUrl = `${BLOG_URL}${post.cachedSlug || `/post/${post.id}`}`

  const css = `
    li {
      margin: calc(var(--gap) * 1.5) 0;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: start;
    }

    h2 {
      margin: 0 0 0 var(--gap);
    }
    
    time {
      color: var(--text-main);
      border-radius: var(--radius);
      margin-top: calc(var(--gap) / 2);
    }

    p {
      margin: var(--gap) 0 0 var(--gap);
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: var(--radius);
      object-fit: cover;
    }

    #right {
      width: 100%;
      align-items: start;
    }

    #left {
      align-items: center;
    }

    #left, #right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    p a {
      color: var(--text-main);
    }

    p a:hover, #left:hover {
      text-decoration: none;
    }
  `

  return withMinifiedStyles(css)(
    <li>
      <a id="left" href={postUrl}>
        {post.cover_image && <img src={post.cover_image} />}
        <time datetime={post.published_at}>{formattedDate}</time>
      </a>
      <div id="right">
        <h2>
          <a href={postUrl}>{post.title}</a>
        </h2>
        <p><i>
          <a href={postUrl}>{post.description}</a>
        </i></p>
      </div>
    </li>
  )
}