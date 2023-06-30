const API_KEY = '2a07cfaa417f22a174c986f09c8e935c'
// const API_KEY = '31ad86cf521f8e9a52fe82995363f214'
// http://api.linkpreview.net/?key=123456&q=https://www.google.com

export const getLinkPreviewData = async ({ url = null }) => {
  if (url === null) return null
  try {
    const response = await fetch(`http://api.linkpreview.net/?key=${API_KEY}&q=${url}`)
    const urlData = await response.json()
    return {
      title: urlData.title,
      description: urlData.description,
      image: urlData.image,
      url: urlData.url
    }
  } catch (error) {
    if (error.response && error.response.status === 429) {
      // Retry after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000))
      return getLinkPreviewData({ url }) // Retry the request
    }
    throw error
  }
}
