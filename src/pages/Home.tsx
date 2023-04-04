import Nano, { Helmet } from 'nano-jsx'
import type { PostType, PageInfoType } from '../types'
import Footer from '../components/Footer'
import List from '../components/List'
import withGlobalStyles from '../styles/globalStyles'
import ListPagination from '../components/ListPagination'

export default function Home({ posts, pageInfo }: { posts: PostType[], pageInfo: PageInfoType }) {
  return withGlobalStyles(
    <main>
      <Helmet>
        <title>bryce.io | blog</title>
      </Helmet>
      <List posts={posts} />
      <ListPagination pageInfo={pageInfo} />
      <Footer />
    </main>
  )
}
