export default `
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
        box-shadow: none;
        width: 1.15em;
        max-width: 1.1em;
        display: inline-block;
        left: 0px;
        margin: 0;
        vertical-align: -0.18em;
        filter: var(--theme-social-icon-invert);
    }

    .ltag-github-readme-tag .readme-overview h3 {
        font-weight: 400;
        margin: 0;
        margin-left: 0.15em;
        font-size: 0.75em;
        line-height: 1.05em;
    }

    .ltag-github-body {
        line-height: 1.12em;
        text-align: left;
        min-height: 100px;
        max-height: 310px;
        padding: 1em 0.5em;
    }

    .ltag-github-body h1 {
        font-size: 1.75em;
    }

    .gh-btn-container {
        text-align: center;
        padding: 0.7em 0 1.35em;
        background: var(--background-body);
        box-shadow: 0 0 60px 42px var(--background-body);
        position: relative;
        z-index: 1;
        border-radius: var(--radius);
    }

    .gh-btn {
        padding: 10px 30px;
    }
`