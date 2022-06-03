import Nano, { Fragment, Helmet } from 'nano-jsx'
import type { PostType } from '../types'
import Footer from '../components/Footer'
import List from '../components/List'
import withGlobalStyles from '../styles/globalStyles'
import GithubCorner from '../components/GithubCorner'

export default function Home({ posts }: { posts: PostType[] }) {
  return withGlobalStyles(
    <>
      <main>
        <Helmet>
          <title>bryce.io | blog</title>
        </Helmet>
        <List posts={posts} />
        <Footer />
      </main>
      <GithubCorner />
    </>
  )
}
