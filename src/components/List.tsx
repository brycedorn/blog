import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import ListPost from './ListPost'

import type { PostType } from '../types'
import { DEV_TO_URL } from '../consts'

export default function List({ posts, thumbs }: { posts: PostType[], thumbs: string[] }) {
  const user = posts && posts[0].user

  const css = `
    h1 {
      margin: var(--gap) 0;
    }

    h1 a, h2 a {
      border-bottom: 2px solid var(--focus);
      box-shadow: inset 0 -8px 0 var(--focus);
      border-radius: var(--radius);
      color: inherit;
      transition: box-shadow var(--animation-duration) ease, border-color var(--animation-duration) ease;
    }

    h1 a {
      box-shadow: inset 0 -10px 0 var(--focus);
    }

    h1 a:hover, h2 a:hover {
      box-shadow: inset 0 -32px 0 var(--focus);
      text-decoration: none;
      border-color: var(--focus);
    }

    h1 a:hover {
      box-shadow: inset 0 -48px 0 var(--focus);
    }

    hr {
      border-color: var(--border-dark);
    }

    ul {
      padding-left: 0;
    }

    #me {
      display: flex;
    }

    #me img {
      border-radius: calc(var(--radius) * 2);
      max-width: calc(var(--list-image-size) / 2);
      max-height: calc(var(--list-image-size) / 2);
      border: var(--text-bright) solid 2px;
      margin-right: 0.8em;
    }

    #title {
      display: flex;
      align-items: center;
    }

    .empty {
      text-align: center;
      margin: 10em 0;
    }
  `

  return withMinifiedStyles(css)(
    <>
      <div id="title">
        {user && <a id="me" aria-label="Link to homepage" href="/"><img src={user?.profile_image_90} width={40} height={40} alt={`Profile image for ${user?.username}`} /></a>}
        <h1>my posts on <a href={DEV_TO_URL}>dev.to</a></h1>
      </div>
      <ul>
        {posts ? posts.map((post, i) => (
          <>
            {i > 0 && <hr />}
            <ListPost post={post} thumb={thumbs[i]} />
          </>
        )) : (
          <p class="empty">There's nothing here. Maybe try <a aria-label="Link to update route" href="/update">updating</a> the cache?</p>
        )}
      </ul>
    </>
  )
}
