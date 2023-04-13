const baseApiUrl = process.env.API_HOST || 'http://127.0.0.1:3000'

export const NEWS_API_PATH = `${baseApiUrl}/api/news`
export const NEWS_CATEGORY_API_PATH = (slug: string) => `${baseApiUrl}/api/news/categories/${slug}`
export const NEWS_SEARCH_API_PATH = `${NEWS_API_PATH}/search`
export const SUBSCRIBE_API_PATH = `${baseApiUrl}/api/subscribe`