const baseApiUrl = process.env.NEXT_PUBLIC_API_HOST

export const NEWS_API_PATH = `${baseApiUrl}/api/news`
export const NEWS_CATEGORY_API_PATH = (slug: string) => `${baseApiUrl}/api/news/categories/${slug}`
export const NEWS_SEARCH_API_PATH = `${NEWS_API_PATH}/search`
export const SUBSCRIBE_API_PATH = `${baseApiUrl}/api/subscribe`