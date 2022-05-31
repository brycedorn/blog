import { withStyles } from 'nano-jsx/lib/withStyles'

const globalStyles = `
  :root {
    --gap: 24px;
    --content-gap: 20px;
    --nav-width: 1024px;
    --main-width: 720px;
    --header-height: 60px;
    --footer-height: 60px;
    --border-radius: 2px;

    --background-body: #202b38;
    --background: #161f27;
    --background-alt: #1a242f;
    --selection: #1c76c5;
    --text-main: #dbdbdb;
    --text-bright: #fff;
    --text-muted: #a9b1ba;
    --links: #41adff;
    --focus: #0096bfab;
    --border: #526980;
    --code: #ffbe85;
    --animation-duration: 0.1s;
    --button-base: #0c151c;
    --button-hover: #040a0f;
    --scrollbar-thumb: var(--button-hover);
    --scrollbar-thumb-hover: color-mod(var(--scrollbar-thumb) lightness(-30%));
    --form-placeholder: #a9a9a9;
    --form-text: var(--text-bright);
    --variable: #d941e2;
    --highlight: #efdb43;
    --select-arrow: svg-load('./assets/select-arrow.svg', fill: #efefef);

    --syntax-background-color: var(--button-base);
    --syntax-text-color: #f8f8f2;
    --syntax-comment-color: #808080;
    --syntax-declaration-color: #f39c12;
    --syntax-literal-color: #dda0dd;
    --syntax-error-color: #f9690e;
    --syntax-name-color: #7ed07e;
    --syntax-string-color: #f2ca27;

    --theme-social-icon-invert: invert(100%);
  }
   
  main {
    position: relative;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    max-width: calc(var(--main-width) + var(--gap) * 2);
    margin: auto;
    padding: var(--gap);
  }
    
  .ltag__link {
    margin: 0.95em auto;
    border: 1px solid var(--text-muted);
    display: flex;
    width: calc(100% - 5vw - 70px);
    padding: calc(var(--gap) / 2);
  }

  .ltag__link .ltag__link__content h2 {
    margin-top: 0;
  }

  .ltag__link .ltag__link__content h3 {
    margin: 0.1vw 0;
    padding: 0;
    margin-bottom: 0;
    color: var(--text-muted);
  }

  .ltag__link .ltag__link__pic img {
    width: calc(2.2vw + 45px);
    height: calc(2.2vw + 45px);
    border-radius: 150px;
    margin-right: calc(var(--gap) /2);
  }

  .highlight-action--fullscreen-off,
  .highlight-action--fullscreen-on {
    display: none;
  }

  .readme-overview {
    padding: 0.8em 0.5em;
  }

  .ltag-github-readme-tag {
    position: relative;
    border: 1px solid var(--text-main);
    border-radius: 3px;
    box-shadow: 1px 2px 4px 0 rgb(0 0 0 / 18%);
    margin: 1.1em auto 1.3em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
    overflow: hidden;
    max-width: 620px;
  }

  .ltag-github-readme-tag .readme-overview h2 {
    font-weight: 400;
    font-size: 1.2em;
    line-height: 1.3em;
    margin: 0em 0px 0.5em;
  }

  .ltag-github-readme-tag .readme-overview h2 img {
    width: 1.15em;
    max-width: 1.1em;
    display: inline-block;
    left: 0px;
    margin: 0;
    vertical-align: -0.18em;
    filter: invert(0);
    filter: var(--theme-social-icon-invert, invert(0));
  }

  .ltag-github-readme-tag .readme-overview h3 {
    font-weight: 400;
    margin: 0;
    margin-left: 0.15em;
    font-size: 0.75em;
    line-height: 1.05em;
  }

  a:hover {
    text-decoration: none;
    color: var(--text-bright);
  }
}
`

export default withStyles(globalStyles)