# [blog.bryce.io](https://blog.bryce.io)

[![Deploy](https://github.com/brycedorn/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/brycedorn/blog/actions/workflows/deploy.yml) [![RSS](https://img.shields.io/static/v1?&message=feed&label=RSS&color=orange&style=flat&logo=rss
)](https://blog.bryce.io/rss)

A project built using [Hono](https://github.com/honojs/hono/) for Cloudflare Workers. Uses [KV](https://developers.cloudflare.com/workers/learning/how-kv-works/) for [edge caching](https://blog.bryce.io/using-workers-kv-to-build-an-edge-cached-blog) and [thumbhash](https://github.com/evanw/thumbhash) to [generate image placeholders](https://blog.bryce.io/generate-thumbhash-at-edge-for-tiny-progressive-images).

Fork and deploy your own for free!

## Development

Install dependencies:

```sh
npm install
```

Set up environment:

```sh
cp .env.example .env
```

Start via [miniflare](https://miniflare.dev/):

```sh
npm start
```

## Updating cache

This project uses [KV](https://developers.cloudflare.com/workers/learning/how-kv-works/) as a distributed store for article data and image placeholders.

To populate the cache, open the `/update` endpoint in your browser with the password set in environment passed via query parameter, e.g. [/update?password=test](http://localhost:8787/update?password=test).

## Deploying your own blog

Fork this repository & set your dev.to username in [consts.ts](https://github.com/brycedorn/blog/blob/master/src/consts.ts) and a password in [actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

Then [generate an API token](https://dash.cloudflare.com/profile/api-tokens) and set `CF_API_TOKEN` and `CF_ACCOUNT_ID` in actions secrets as well. The [deploy action](https://github.com/brycedorn/blog/blob/master/.github/workflows/deploy.yml) will automatically deploy via Wrangler.