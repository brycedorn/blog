import { withStyles } from 'nano-jsx/lib/withStyles'
import cssVars from './styles/cssVars'

const globalStyles = `
  ${cssVars}

  html {
    background: var(--background-body);
  }

  body {
    background: none;
  }

  main {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: calc(var(--main-width) + var(--gap) * 2);
    margin: auto;
    padding: calc(var(--gap) / 4);
  }

  footer {
    padding-top: var(--gap);
  }
}
`

export default withStyles(globalStyles)