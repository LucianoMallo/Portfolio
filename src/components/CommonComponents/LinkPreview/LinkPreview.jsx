import { useFetchPreview } from '../../../hooks/useFetchPreview'

const LinkPreview = ({ url }) => {
  const { data, loading } = useFetchPreview({ url })
  if (url === null) return (<></>)
  if (loading) return (<div className='link-preview__loading'>Loading...</div>)
  return (
    <a className='link-preview' href={data.url}>
      <div className='link-preview__image'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='link-preview__info'>
        <div className='link-preview__title'>{data.title}</div>
        <div className='link-preview__description'>{data.description}</div>
        <div className='link-preview__url' href={data.url}>{data.url}</div>
      </div>
    </a>
  )
}

export default LinkPreview
