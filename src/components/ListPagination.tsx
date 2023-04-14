import Nano from 'nano-jsx'
import { withMinifiedStyles } from '../utils'
import { PageInfoType } from '../types'

export default function ListPagination({ pageInfo }: { pageInfo: PageInfoType }) {
  const {pageNumber, isFirstPage, isLastPage} = pageInfo

  const css = `
    #pagination {
      display: flex;
      justify-content: ${isFirstPage ? 'end' : 'space-between'};
    }
  `

  return withMinifiedStyles(css)(
    <div id="pagination">
      {!isFirstPage && <h1>
        <a href={pageNumber === 1 ? '/' : `/page/${pageNumber - 1}`} aria-label="Pagination link to newer posts">newer</a>
      </h1>}
      {!isLastPage && <h1>
        <a href={`/page/${pageNumber + 1}`} aria-label="Pagination link to older posts">older</a>
      </h1>}
    </div>
  )
}