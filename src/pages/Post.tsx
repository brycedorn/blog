import Nano, { Fragment, Helmet } from 'nano-jsx'
import type { PostDetailType } from '../types'
import Footer from '../components/Footer'
import PostDetail from '../components/PostDetail'
import withGlobalStyles from '../styles/globalStyles'
import GithubCorner from '../components/GithubCorner'
import { BLOG_TITLE, BLOG_URL } from '../consts'

export default function Home({ post }: { post: PostDetailType }) {
  return withGlobalStyles(
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="last-updated" content={post.edited_at} />
        <link rel="canonical" href={`${BLOG_URL}/${post.slug}`} />
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BLOG_URL}/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:site_name" content={BLOG_TITLE} />
        <meta name="twitter:creator" content="@amsterdorn" />
        <meta name="twitter:title" content={post.title}/>
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:widgets:new-embed-design" content="on" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:image" content={post.social_image} />
        <meta name="twitter:image:src" content={post.social_image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
      <main>
        <PostDetail post={post} />
      </main>
      <Footer />
      <GithubCorner />
    </>
  )
}
