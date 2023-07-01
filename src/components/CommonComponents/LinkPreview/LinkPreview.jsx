import { useFetchPreview } from '../../../hooks/useFetchPreview'
import { LinkPreviewLoading, LinkPreviewContainer } from './LinkPreview_Styles'
import LoadingSpinner from '../../../assets/images/Loading_Spinner.gif'

const LinkPreview = ({ url }) => {
  const { data, loading } = useFetchPreview({ url })
  if (url === null) return (<></>)

  if (loading) {
    return (
      <LinkPreviewLoading>
        <img src={LoadingSpinner} />
        <p className='Link-Preview-Loading'>Loading...</p>
      </LinkPreviewLoading>
    )
  }
  return (
    <LinkPreviewContainer className='Link-Preview'>
      <div className='link-preview_image'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='link-preview_info'>
        <div className='link-preview_title'>{data.title}</div>
        <div className='link-preview_description'>{data.description}</div>
        <a className='link-preview_url' target='_blank' href={data.url} rel='noreferrer'>Link: {data.url}</a>
      </div>
    </LinkPreviewContainer>
  )
}

export default LinkPreview
