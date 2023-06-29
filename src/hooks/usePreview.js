import { useState, useRef, useCallback } from 'react'
import { getLinkPreviewData } from '../services/LinkPreview'

export function usePreview ({ url }) {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef({ url })

  const getMovies = useCallback(async ({ url }) => {
    if (url === previousSearch.current.url) return

    try {
      setLoading(true)
      setFetchError(null)
      previousSearch.current.search = url
      const newUrl = await getLinkPreviewData({ url })
      setData(newUrl)
    } catch (e) {
      setFetchError(e.message)
    } finally {
      setLoading(false)
    }
  }
  , [])

  return { data, getMovies, loading, fetchError }
}
