export default `
    #content p {
        line-height: 1.6;
    }

    #content p a {
        text-decoration: underline;
    }

    .article-body-image-wrapper {
        width: 100%;
        display: block;
        text-align: center;
    }

    .article-body-image-wrapper img {
        border-radius: var(--radius);
        box-shadow: 0 0 calc(var(--gap)/2) var(--button-base);
      }

    .ltag__link {
        margin: 1.6em auto;
        border: 1px solid var(--text-muted);
        display: flex;
        width: calc(100% - 5vw - 70px);
        padding: calc(var(--gap) / 2);
        border-radius: var(--radius);
    }

    .ltag__link__content {
        margin-left: calc(var(--gap) / 2);
    }

    .ltag__link__link:hover {
        text-decoration: none;
    }

    .ltag__link .ltag__link__content h2 {
        margin: 0 0 0.2em 0;
    }

    .ltag__link .ltag__link__content h3 {
        margin: 0.1em 0;
        padding: 0;
        color: var(--text-muted);
        font-size: 1em;
    }

    .ltag__link .ltag__link__pic img {
        max-width: calc(2.2vw + 45px);
        max-height: calc(2.2vw + 45px);
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

    blockquote.ltag__twitter-tweet {
        font-style: normal;
        max-width: 500px;
        font-size: 0.75em;
        line-height: 1.35em;
        min-height: 60px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.18) 1px 2px 4px 0px;
        background: white;
        border-radius: 3px;
        margin: 1.6em auto !important;
        padding: 0px !important;
        border-width: 1px !important;
        border-style: solid !important;
        border-color: rgb(219, 219, 219) !important;
        border-image: initial !important;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header .ltag__twitter-tweet__profile-image {
        height: 36px;
        min-height: 36px;
        width: 36px;
        position: absolute;
        left: calc(0.3vw + 13px);
        top: calc(0.3vw + 13px);
        background-color: rgb(236, 236, 236);
        border-radius: 50px;
        margin: 0px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header {
        position: relative;
        height: 52px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header .ltag__twitter-tweet__full-name {
        color: rgb(28, 32, 34);
        position: absolute;
        left: calc(0.3vw + 57px);
        top: calc(0.3vw + 13px);
        font-weight: bold;
        font-size: 16px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header .ltag__twitter-tweet__username {
        position: absolute;
        left: calc(0.3vw + 57px);
        top: calc(0.3vw + 33px);
        color: rgb(105, 120, 130);
        font-size: 14px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header .ltag__twitter-tweet__twitter-logo {
        position: absolute;
        right: calc(0.3vw + 8px);
        top: 20px;
        left: auto;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__header .ltag__twitter-tweet__twitter-logo img {
        height: 24px;
        min-height: 24px;
        max-width: 24px;
        display: inline-block;
        width: 36px;
        margin: auto;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__body {
        color: rgb(28, 32, 34);
        font-size: 16px;
        line-height: 22px;
        padding: calc(0.3vw + 13px) calc(0.3vw + 13px) 0px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__date {
        font-size: 14px;
        color: rgb(105, 120, 130);
        margin-top: 3px;
        padding: 0px calc(0.3vw + 13px);
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__actions {
        color: rgb(170, 184, 194);
        font-size: 14px;
        margin: 6px auto 0px;
        padding: 0px calc(0.3vw + 13px) 5px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__actions .ltag__twitter-tweet__actions__button {
        width: 18px;
        height: 22px;
        display: inline-block;
        margin-left: 20px;
        margin-right: 2px;
        vertical-align: -7px;
    }

    blockquote.ltag__twitter-tweet .ltag__twitter-tweet__actions img {
        height: 20px;
        min-height: 20px;
        margin: 0px;
    }

    #instagram-liquid-tag {
        background: white;
        border: 1px solid var(--border);
        margin: 1px 1px 12px;
        min-width: 326px;
        max-width: 540px;
        width: calc(100% - 2px);
        height: 559px;
        border-radius: 3px;
        box-shadow: none;
        display: block;
        padding: 0px;
    }

    .instagram-position {
        position: relative;
        max-width: 540px;
        margin: 0 auto;
    }
`
