import Nano, { Helmet } from 'nano-jsx'
import type { PostType, PageInfoType } from '../types'
import Footer from '../components/Footer'
import List from '../components/List'
import withGlobalStyles from '../styles/globalStyles'
import ListPagination from '../components/ListPagination'
import { BLOG_URL } from '../consts'

export default function Home({ posts, pageInfo, thumbs }: { posts: PostType[], pageInfo: PageInfoType, thumbs: string[] }) {
  const post = posts?.[0]

  return withGlobalStyles(
    <main>
      <Helmet>
        <title>bryce.io | blog</title>
        <meta name="last-updated" content={post?.edited_at} />
        <meta name="description" content="This is my developer blog and sandbox for playing with edge workers. I mostly write about web & JS, sometimes Rust." />
        <meta name="keywords" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={BLOG_URL} />
        <meta property="og:title" content="blog.bryce.io" />
        <meta property="og:description" content="This is my developer blog and sandbox for playing with edge workers. I mostly write about web & JS, sometimes Rust." />
        <meta property="og:site_name" content="blog.bryce.io" />
        <meta name="twitter:creator" content="@amsterdorn" />
        <meta name="twitter:title" content="blog.bryce.io"/>
        <meta name="twitter:description" content="This is my developer blog and sandbox for playing with edge workers. I mostly write about web & JS, sometimes Rust." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:widgets:new-embed-design" content="on" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:image" content={post?.user?.profile_image_90} />
        <meta name="twitter:image:src" content={post?.user?.profile_image_90} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
      <List posts={posts} thumbs={thumbs} />
      <ListPagination pageInfo={pageInfo} />
      <Footer />
    </main>
  )
}
