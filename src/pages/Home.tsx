import Nano, { Fragment, Helmet } from 'nano-jsx'
import type { PostType } from '../types'
import Footer from '../components/Footer'
import List from '../components/List'
import withGlobalStyles from '../globalStyles'
import GithubCorner from '../components/GithubCorner'

export default function Home({ posts }: { posts: PostType[] }) {
  return withGlobalStyles(
    <>
      <Helmet>
        <title>dev blog</title>
      </Helmet>
      <main>
        <List posts={posts} />
      </main>
      <Footer />
      <GithubCorner />
    </>
  )
}
