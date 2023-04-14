import Nano from 'nano-jsx'
import { withMinifiedStyles } from '../utils'

export default function PostNavigation({ pageNumber }: {pageNumber:number}) {
  const css = `
    h1.nav {
      margin: 0 0 var(--gap) 0;
      font-size: 2.2em;
    }

    h1.nav a {
      border-bottom: 2px solid var(--focus);
      box-shadow: inset 0 -8px 0 var(--focus);
      border-radius: var(--radius);
      color: inherit;
      transition: box-shadow var(--animation-duration) ease, border-color var(--animation-duration) ease;
    }

    h1.nav a {
      box-shadow: inset 0 -10px 0 var(--focus);
    }

    h1.nav a:hover {
      box-shadow: inset 0 -32px 0 var(--focus);
      text-decoration: none;
      border-color: var(--focus);
    }

    h1.nav a:hover {
      box-shadow: inset 0 -48px 0 var(--focus);
    }
  `

  return withMinifiedStyles(css)(
    <h1 class="nav">go <a href={pageNumber === 0 ? '/' : `/page/${pageNumber}`} aria-label="Back to post list">back</a></h1>
  )
}