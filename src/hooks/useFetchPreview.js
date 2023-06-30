import { useState, useEffect } from 'react'
import { getLinkPreviewData } from '../services/linkPreview'
import results from '../services/mocks/results.json'

export const useFetchPreview = ({ url }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLinkPreviewData({ url })
      .then((data) => {
        setData(data)
        console.log({ data })
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  // useEffect(() => {
  //   setData(results)
  //   setLoading(false)
  // }, [data])
  return { data, loading }
}
