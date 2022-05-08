import Nano, { Fragment } from 'nano-jsx'
import ListPost from './ListPost';
import { withStyles } from 'nano-jsx/lib/withStyles'

import type { PostType } from '../types'

export default function List({ posts }: { posts: PostType[] }) {
  const css = `
    h1 {
      margin-bottom: calc(var(--gap) * 2);
    }

    hr {
      margin-top: var(--gap);
    }

    ul {
      padding-left: var(--gap);
    }
  `;

  return withStyles(css)(
    <Fragment>
        <h1>my posts on <a href="https://dev.to/bryce">dev.to</a></h1>
        <ul>
            {posts.map((post, i) => (
              <Fragment>
                {i > 0 && <hr />}
                <ListPost post={post} />
              </Fragment>
            ))}
        </ul>
    </Fragment>
  )
}
