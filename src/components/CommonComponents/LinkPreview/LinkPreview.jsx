import { useState, useEffect } from 'react'
import { getLinkPreviewData } from '../../../services/linkPreview'

const LinkPreview = ({ url }) => {
  const [data, setData] = useState({})
  useEffect(() => {
    getLinkPreviewData({ url }).then((data) => {
      setData(data)
    })
  }, [])
  if (url === null) return (<></>)
  return (
    <div className='link-preview'>
      <div className='link-preview__image'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='link-preview__info'>
        <div className='link-preview__title'>{data.title}</div>
        <div className='link-preview__description'>{data.description}</div>
        <div className='link-preview__url'>{data.url}</div>
      </div>
    </div>
  )
}

export default LinkPreview
