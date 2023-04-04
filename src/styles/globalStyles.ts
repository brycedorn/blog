import { withMinifiedStyles } from '../utils'
import cssVars from './cssVars'
import water from './water'

const globalStyles = `
  ${water}
  ${cssVars}

  html {
    background: var(--background-body);
  }

  body {
    background: none;
  }

  main {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: calc(var(--main-width) + var(--gap) * 4);
    margin: auto;
    padding: calc(var(--gap) / 4);
  }

  footer {
    padding-top: var(--gap);
    font-size: 0.8em;
  }

  ::selection {
    background: var(--links);
  }
}
`

export default withMinifiedStyles(globalStyles)