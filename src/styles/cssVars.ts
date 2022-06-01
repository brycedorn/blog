export default `
    :root {
        --gap: 24px;
        --content-gap: 20px;
        --nav-width: 1024px;
        --main-width: 720px;
        --header-height: 60px;
        --footer-height: 60px;
        --radius: 2px;

        --background: #1a1a1a;
        --background-body: #222;
        --text-main: #9c9c9c;
        --text-bright: #f0f0f0;
        --text-muted: #a9b1ba;
        --links: #7a49a5;
        --focus: #613a84;
        --border: #666;

        --background-body-gradient: linear-gradient(to right, var(--background), var(--background-body), var(--background-body), var(--background-body), var(--background));
        --code: #ffbe85;
        --animation-duration: 0.1s;
        --button-base: #171717;
        --button-hover: #030303;
        --selection: var(--button-base);
        --scrollbar-thumb: var(--button-hover);
        --form-placeholder: #a9a9a9;
        --form-text: var(--text-bright);
        --color-body-color: var(--background);

        --syntax-background-color: var(--button-base);
        --variable: #d941e2;
        --highlight: #efdb43;
        --syntax-text-color: #f8f8f2;
        --syntax-comment-color: #808080;
        --syntax-declaration-color: #ffb86c;
        --syntax-literal-color: #bd93f9;
        --syntax-error-color: #ff5555;
        --syntax-name-color: #8be9fd;
        --syntax-string-color: #ff79c6;

        --theme-social-icon-invert: invert(100%);
    }

    @media (prefers-color-scheme: light) {
        :root {
            --links: #946db7;
            --focus: #d0bfde;
            --focus-light: #d0bfde;
            --background: #f0f0f0;
            --background-body: #fcfcfc;
            --text-main: #444;
            --text-bright: #333;
            --text-muted: #666;
            --button-base: #dcdcdc;
            --button-hover: #cecece;
            --syntax-background-color: #444;
            --color-body-color: var(--background);
            --theme-social-icon-invert: unset;
        }
    }
`