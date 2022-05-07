import Nano, { Fragment } from 'nano-jsx'
import { Helmet } from 'nano-jsx'
import Footer from '../components/Footer';
import type { PostDetail } from '../types'
import withGlobalStyles from '../globalStyles';

export default function PostDetail({ post }: { post: PostDetail }) {
  return withGlobalStyles(
    <Fragment>
      <Helmet>
        <title>dev blog | {post.title}</title>
      </Helmet>
      <main>
        <div innerHTML={{ __dangerousHtml: post.body_html }} />
      </main>
      <Footer />
    </Fragment>
  )
}
