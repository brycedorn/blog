export default `
    :root {
        --gap: 24px;
        --content-gap: 20px;
        --nav-width: 1024px;
        --main-width: 720px;
        --header-height: 60px;
        --footer-height: 60px;
        --radius: 2px;
        --list-image-size: 80px;

        --background: #000;
        --background-body: #111;
        --text-main: #b7bec5;
        --text-bright: #eff1f3;
        --text-muted: #a9b1ba;
        --links: #80b7fc;
        --focus: #0659c6;
        --border: #666;
        --border-dark: #444;

        --code: #ffbe85;
        --animation-duration: 100ms;
        --unblur-duration: 400ms;
        --button-base: #111;
        --button-hover: #000;
        --selection: var(--button-base);
        --form-placeholder: #a9a9a9;
        --form-text: var(--text-bright);
        --color-body-color: var(--background);

        --syntax-background-color: #222;
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
            --links: #358dfa;
            --focus: #b2d3fd;
            --background: #eff1f3;
            --background-body: #fefefe;
            --text-main: #555;
            --text-bright: #333;
            --text-muted: #666;
            --button-base: #d3d7dc;
            --button-hover: #e1e4e7;
            --syntax-background-color: #444;
            --border-dark: #ddd;
            --color-body-color: var(--background);
            --theme-social-icon-invert: unset;
        }
    }
`