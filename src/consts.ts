export const USERNAME = 'bryce'
export const DEV_TO_URL = `https://dev.to/${USERNAME}`
export const BLOG_URL = 'https://blog.bryce.io'
// export const BLOG_URL = 'http://localhost:8787'
export const BLOG_TITLE = 'blog.bryce.io'
export const PAGE_SIZE = 4

export const API_URL = 'https://dev.to/api'

export const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
  cookie: process.env.COOKIE || ''
}

export const fetchOpts = {
  headers
}
