import Nano, { Component, Helmet } from 'nano-jsx'
import { PostDetailType, PostType } from './types'
import { removeEmoji } from './utils'
import { BLOG_TITLE, BLOG_URL, DESCRIPTION, PAGE_SIZE } from './consts'

export async function render(component: Component, post?: PostDetailType) {
  const app = Nano.renderSSR(component)
  const { body, head, footer, attributes } = Helmet.SSR(app)
  const favicon = await POSTS.get('favicon')

  const html = `<!DOCTYPE html>
<html ${attributes.html.toString()} lang="en">
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='icon' type='image/png' href=${favicon || ''}>
    <link rel="alternate" type="application/rss+xml" title="RSS Feed for ${BLOG_TITLE}" href="${BLOG_URL}/rss" />
    ${renderStructuredData(post)}
    ${head.join('\n')}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" crossorigin="anonymous"></script>
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
    <title>${BLOG_TITLE} | RSS</title>
    <link>${BLOG_URL}</link>
    <atom:link href="${BLOG_URL}/rss" rel="self" type="application/rss+xml" />
    <description>${DESCRIPTION}</description>${posts?.map(post => `
    <item>
      <title>${removeEmoji(post.title)}</title>
      <link>${BLOG_URL}/${post.cached_slug}</link>
      <description>${removeEmoji(post.description)}<![CDATA[<img src=${post.cover_image} alt="Cover image for ${post.cached_slug}">]]></description>
      <guid isPermaLink="false">${post.id}</guid>
      <pubDate>${(new Date(post.published_at)).toUTCString()}</pubDate>
    </item>`).join('')}
  </channel>
</rss>
  `

  return xml
}

export async function renderSitemap(posts: PostType[]) {
  const lastmod = (new Date()).toISOString()
  const pages = new Array(Math.floor(posts.length/PAGE_SIZE)).fill(null)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>${BLOG_URL}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>1.00</priority>
</url>
${posts?.map((post, i) => `<url>
  <loc>${BLOG_URL}/${post.cached_slug}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${Number(0.99 - i/posts.length).toFixed(2)}</priority>
</url>
`).join('')}
${pages.map((_page, i) => `<url>
  <loc>${BLOG_URL}/page/${i + 1}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${Number(0.99 - i/pages.length).toFixed(2)}</priority>
</url>
`).join('')}
</urlset>
  `

  return xml
}

export function renderRobotsTxt() {
  return `User-agent: *\nSitemap: ${BLOG_URL}/sitemap.xml`
}

function renderStructuredData(post?: PostDetailType) {
  if (!post) {
    return ''
  }

  const json = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.cover_image],
    datePublished: post.published_at,
    dateModified: post.edited_at || post.created_at,
    author: [{
      '@type': 'Person',
      name: 'Bryce Dorn',
      url: post.user.website_url,
      image: post.user.profile_image
    }]
  }

  return `<script type="application/ld+json">${JSON.stringify(json)}</script>`
}