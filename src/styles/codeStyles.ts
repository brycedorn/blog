export default `
    code {
        overflow: auto;
        font-family: 'Source Code Pro'
    }

    pre>code::-webkit-scrollbar {
        display: none
    }

    pre:not(.highlight),
    div.highlight,
    li pre.highlight,
    blockquote pre.highlight {
        background: var(--syntax-background-color);
        color: var(--syntax-text-color);
        border-radius: var(--radius);
        margin: 0;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        overflow-wrap: initial;
        padding: var(--su-2)
    }

    pre:not(.highlight),
    div.highlight,
    li pre.highlight,
    blockquote pre.highlight {
        padding: calc(var(--gap) / 2) calc(var(--gap) / 2)
    }

    @media (max-width: 768px) {
        pre:not(.highlight),
        div.highlight,
        li pre.highlight,
        blockquote pre.highlight {
            font-size: 0.8em;
        }
    }

    pre:not(.highlight) code,
    div.highlight code,
    li pre.highlight code,
    blockquote pre.highlight code {
        padding: 0
    }

    div.highlight {
        position: relative
    }

    div.highlight .highlight {
        overflow: auto
    }

    .fullscreen-code.is-open {
        visibility: visible;
        transform: scale(1)
    }

    code {
        background: var(--syntax-background-color);
        color: var(--syntax-name-color);
        border-radius: var(--radius);
        max-width: 100%;
        padding: 0.1em 0.25em
    }

    pre {
        margin: 0
    }

    .highlight .hll {
        background-color: #49483e
    }

    .highlight {
        background: var(--syntax-background-color);
        color: var(--syntax-text-color)
    }

    .highlight .c {
        color: var(--syntax-comment-color)
    }

    .highlight .err {
        text-shadow: 0 0 7px var(--syntax-error-color)
    }

    .highlight .k {
        color: var(--syntax-declaration-color)
    }

    .highlight .l {
        color: var(--syntax-literal-color)
    }

    .highlight .n {
        color: var(--syntax-text-color)
    }

    .highlight .o {
        color: var(--syntax-error-color)
    }

    .highlight .p {
        color: var(--syntax-text-color)
    }

    .highlight .ch {
        color: var(--syntax-comment-color)
    }

    .highlight .cm {
        color: var(--syntax-comment-color)
    }

    .highlight .cp {
        color: var(--syntax-comment-color)
    }

    .highlight .cpf {
        color: var(--syntax-comment-color)
    }

    .highlight .c1 {
        color: var(--syntax-comment-color)
    }

    .highlight .cs {
        color: var(--syntax-comment-color)
    }

    .highlight .gd {
        color: var(--syntax-error-color)
    }

    .highlight .ge {
        font-style: italic
    }

    .highlight .gi {
        color: var(--syntax-name-color)
    }

    .highlight .gs {
        font-weight: var(--fw-bold)
    }

    .highlight .gu {
        color: var(--syntax-comment-color)
    }

    .highlight .kc {
        color: var(--syntax-declaration-color)
    }

    .highlight .kd {
        color: var(--syntax-declaration-color)
    }

    .highlight .kn {
        color: var(--syntax-error-color)
    }

    .highlight .kp {
        color: var(--syntax-declaration-color)
    }

    .highlight .kr {
        color: var(--syntax-declaration-color)
    }

    .highlight .kt {
        color: var(--syntax-declaration-color)
    }

    .highlight .ld {
        color: var(--syntax-string-color)
    }

    .highlight .m {
        color: var(--syntax-literal-color)
    }

    .highlight .s {
        color: var(--syntax-string-color)
    }

    .highlight .na {
        color: var(--syntax-name-color)
    }

    .highlight .nb {
        color: var(--syntax-text-color)
    }

    .highlight .nc {
        color: var(--syntax-name-color)
    }

    .highlight .no {
        color: var(--syntax-declaration-color)
    }

    .highlight .nd {
        color: var(--syntax-name-color)
    }

    .highlight .ni {
        color: var(--syntax-text-color)
    }

    .highlight .ne {
        color: var(--syntax-name-color)
    }

    .highlight .nf {
        color: var(--syntax-name-color)
    }

    .highlight .nl {
        color: var(--syntax-text-color)
    }

    .highlight .nn {
        color: var(--syntax-text-color)
    }

    .highlight .nx {
        color: var(--syntax-name-color)
    }

    .highlight .py {
        color: var(--syntax-text-color)
    }

    .highlight .nt {
        color: var(--syntax-error-color)
    }

    .highlight .nv {
        color: var(--syntax-text-color)
    }

    .highlight .ow {
        color: var(--syntax-error-color)
    }

    .highlight .w {
        color: var(--syntax-text-color)
    }

    .highlight .mb {
        color: var(--syntax-literal-color)
    }

    .highlight .mf {
        color: var(--syntax-literal-color)
    }

    .highlight .mh {
        color: var(--syntax-literal-color)
    }

    .highlight .mi {
        color: var(--syntax-literal-color)
    }

    .highlight .mo {
        color: var(--syntax-literal-color)
    }

    .highlight .sa {
        color: var(--syntax-string-color)
    }

    .highlight .sb {
        color: var(--syntax-string-color)
    }

    .highlight .sc {
        color: var(--syntax-string-color)
    }

    .highlight .dl {
        color: var(--syntax-string-color)
    }

    .highlight .sd {
        color: var(--syntax-string-color)
    }

    .highlight .s2 {
        color: var(--syntax-string-color)
    }

    .highlight .se {
        color: var(--syntax-literal-color)
    }

    .highlight .sh {
        color: var(--syntax-string-color)
    }

    .highlight .si {
        color: var(--syntax-string-color)
    }

    .highlight .sx {
        color: var(--syntax-string-color)
    }

    .highlight .sr {
        color: var(--syntax-string-color)
    }

    .highlight .s1 {
        color: var(--syntax-string-color)
    }

    .highlight .ss {
        color: var(--syntax-string-color)
    }

    .highlight .bp {
        color: var(--syntax-text-color)
    }

    .highlight .fm {
        color: var(--syntax-name-color)
    }

    .highlight .vc {
        color: var(--syntax-text-color)
    }

    .highlight .vg {
        color: var(--syntax-text-color)
    }

    .highlight .vi {
        color: var(--syntax-text-color)
    }

    .highlight .vm {
        color: var(--syntax-text-color)
    }

    .highlight .il {
        color: var(--syntax-literal-color)
    }
`