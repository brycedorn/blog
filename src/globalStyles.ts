import { withStyles } from 'nano-jsx/lib/withStyles'

const globalStyles = `
    :root {
        --gap: 24px;
        --content-gap: 20px;
        --nav-width: 1024px;
        --main-width: 720px;
        --header-height: 60px;
        --footer-height: 60px;

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

    a:hover {
        text-decoration: none;
        color: var(--text-bright);
    }
}
`

export default withStyles(globalStyles)