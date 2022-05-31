import Nano, { Fragment, withStyles } from 'nano-jsx'
import ListPost from './ListPost'

import type { PostType } from '../types'

export default function List({ posts }: { posts: PostType[] }) {
  const css = `
    h1 {
      margin: var(--gap);
    }

    h1 a, ul a {
      border-bottom: 2px solid var(--focus);
      box-shadow: inset 0 -8px 0 var(--focus);
      border-radius: var(--border-radius);
      color: inherit;
      transition: box-shadow var(--animation-duration) ease, border-color var(--animation-duration) ease;
    }

    h1 a {
      box-shadow: inset 0 -10px 0 var(--focus);
    }

    h1 a:hover, ul a:hover {
      box-shadow: inset 0 -32px 0 var(--links);
      text-decoration: none;
      border-color: var(--links);
    }

    h1 a:hover {
      box-shadow: inset 0 -48px 0 var(--links);
    }

    hr {
      margin-top: var(--gap);
    }

    ul {
      padding-left: var(--gap);
    }
  `

  return withStyles(css)(
    <>
      <h1>my posts on <a href="https://dev.to/bryce">dev.to</a></h1>
      <ul>
        {posts.map((post, i) => (
          <>
            {i > 0 && <hr />}
            <ListPost post={post} />
          </>
        ))}
      </ul>
    </>
  )
}
