import { withMinifiedStyles } from '../utils'
import cssVars from './cssVars'

const globalStyles = `
  ${cssVars}

  html {
    background: var(--background-body);
  }

  body {
    background: none;
  }

  main {
    font-family: 'Golos Text', sans-serif;
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

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-body);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--focus);
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--focus);
  }

  ::-webkit-scrollbar-track-piece {
    background: var(--background-body);
  }
}
`

export default withMinifiedStyles(globalStyles)