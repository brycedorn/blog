import Nano, { Fragment, Helmet } from 'nano-jsx'
import type { PostDetailType } from '../types'
import Footer from '../components/Footer'
import PostDetail from '../components/PostDetail'
import withGlobalStyles from '../globalStyles'
import GithubCorner from '../components/GithubCorner'

export default function Home({ post }: { post: PostDetailType }) {
  return withGlobalStyles(
    <>
      <Helmet>
        <title>dev blog | {post.title}</title>
      </Helmet>
      <main>
        <PostDetail post={post} />
      </main>
      <Footer />
      <GithubCorner />
    </>
  )
}
