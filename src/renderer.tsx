import Nano, { Component, Helmet } from 'nano-jsx'
import { PostType } from './types'
import { removeEmoji } from './utils'

export async function render(component: Component) {
  const app = Nano.renderSSR(component)
  const { body, head, footer, attributes } = Helmet.SSR(app)
  const favicon = await POSTS.get('favicon')

  const html = `<!DOCTYPE html>
<html ${attributes.html.toString()}>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/water.css@2/out/light.min.css' />
    <link rel='icon' type='image/png' href=${favicon || ''}>
    <link rel="alternate" type="application/rss+xml" title="RSS Feed for blog.bryce.io" href="https://blog.bryce.io/rss" />
    ${head.join('\n')}
  </head>
  <body ${attributes.body.toString()}>
    ${body}
    ${footer.join('\n')}
  </body>
</html>
  `
  return html
}

export async function renderFeed(posts: PostType[]) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>bryce.io | blog RSS</title>
    <link>https://blog.bryce.io</link>
    <description>Idk</description>${posts.map(post => `
    <item>
      <title>${removeEmoji(post.title)}</title>
      <link>https://blog.bryce.io/${post.cachedSlug}</link>
      <description>${removeEmoji(post.description)}</description>
      <author>hi@bryce.io</author>
      <guid>${post.slug}</guid>
      <pubDate>${(new Date(post.published_at)).toUTCString()}</pubDate>
    </item>`).join('')}
  </channel>
</rss>
  `

  return xml
}