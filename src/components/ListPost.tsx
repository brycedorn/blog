import Nano from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import type { PostType } from '../types'
import { BLOG_URL } from '../consts'

export default function ListPost({ post, thumb }: { post: PostType, thumb: string }) {
  const date = new Date(post.published_at)
  const formattedDate = new Intl.DateTimeFormat('en-US').format(date)
  const postUrl = `${BLOG_URL}/${post.cachedSlug || `post/${post.id}`}`

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

    .post-image {
      width: var(--list-image-size);
      height: var(--list-image-size);
      border-radius: calc(var(--radius) * 2);
      border: var(--text-bright) solid 2px;
      overflow: hidden;
    }

    .post-image img {
      height: var(--list-image-size);
      object-fit: cover;
    }

    .right {
      width: 100%;
      align-items: start;
    }

    .left {
      align-items: center;
    }

    .left, .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    p a {
      color: var(--text-main);
    }

    p a:hover, .left:hover {
      text-decoration: none;
    }

    .blur-up {
      filter: blur(5px);
      transition: filter var(--unblur-duration);
      position: relative;
      z-index: 2;
    }

    .blur-up.lazyloaded {
      filter: blur(0);
    }

    .behind {
      position: absolute;
      z-index: 1;
    }
  `

  return withMinifiedStyles(css)(
    <li>
      <a class="left" href={postUrl}>
        {post.cover_image && <div class="post-image">
          <img class="behind" src={thumb} />
          <img class="lazyload blur-up" src={thumb} data-src={post.cover_image}/>
        </div>}
        <time datetime={post.published_at}>{formattedDate}</time>
      </a>
      <div class="right">
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