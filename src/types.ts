declare global {
  const POSTS: KVStorageType
  const THUMBS: KVStorageType
}

interface KVStorageType {
  get: (key: string) => Promise<string>,
  put: (key: string, value: string) => Promise<void>
}

interface UserType {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: number
  website_url: string
  profile_image: string
  profile_image_90: string
}

export interface PostType {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: string
  public_reactions_count: string
  collection_id: string
  published_timestamp: string
  positive_reactions_count: string
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at: string
  published_at: string
  last_comment_at: string
  reading_time_minutes: string
  tag_list: string
  tags: string
  user: UserType
  flare_tag: string
  cachedSlug?: string
}

export interface PostDetailType {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: string
  public_reactions_count: string
  collection_id: string
  published_timestamp: string
  positive_reactions_count: string
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at: string
  published_at: string
  last_comment_at: string
  reading_time_minutes: string
  tag_list: string
  tags: string[]
  body_html: string
  body_markdown: string
  user: UserType
  flare_tag: string
}

export interface PageInfoType {
  pageNumber: number
  isFirstPage: boolean
  isLastPage: boolean
}