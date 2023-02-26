import Nano, { Fragment } from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import ListPost from './ListPost'

import type { PostType } from '../types'

export default function List({ posts }: { posts: PostType[] }) {
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
      border-radius: 25%;
      width: 40px;
      height: 40px;
      border: var(--text-bright) solid 2px;
      margin-right: 0.8em;
    }

    #title {
      display: flex;
      align-items: center;
    }
  `

  return withMinifiedStyles(css)(
    <>
      <div id="title">
        <a id="me" href="https://dev.to/bryce"><img src={posts[0].user.profile_image_90}/></a>
        <h1>my posts on <a href="https://dev.to/bryce">dev.to</a></h1>
      </div>
      <ul>
        {posts?.map((post, i) => (
          <>
            {i > 0 && <hr />}
            <ListPost post={post} />
          </>
        ))}
      </ul>
    </>
  )
}
