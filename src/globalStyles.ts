import { withStyles } from 'nano-jsx/lib/withStyles'

const globalStyles = `
    :root {
        --gap: 24px;
        --content-gap: 20px;
        --nav-width: 1024px;
        --main-width: 720px;
        --header-height: 60px;
        --footer-height: 60px;
    }
   
    main {
        position: relative;
        min-height: calc(100vh - var(--header-height) - var(--footer-height));
        max-width: calc(var(--main-width) + var(--gap) * 2);
        margin: auto;
        padding: var(--gap);
    }
}
`

export default withStyles(globalStyles)