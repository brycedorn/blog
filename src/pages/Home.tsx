import Nano, { Helmet } from 'nano-jsx'
import type { PostType, PageInfoType } from '../types'
import Footer from '../components/Footer'
import List from '../components/List'
import withGlobalStyles from '../styles/globalStyles'
import ListPagination from '../components/ListPagination'

export default function Home({ posts, pageInfo, thumbs }: { posts: PostType[], pageInfo: PageInfoType, thumbs: string[] }) {
  return withGlobalStyles(
    <main>
      <Helmet>
        <title>bryce.io | blog</title>
      </Helmet>
      <List posts={posts} thumbs={thumbs} />
      <ListPagination pageInfo={pageInfo} />
      <Footer />
    </main>
  )
}
