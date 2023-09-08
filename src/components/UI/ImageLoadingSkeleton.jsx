import ContentLoader from 'react-content-loader'

const ImageLoadingSkeleton = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox='0 0 400 460'
        backgroundColor='#f35856'
        foregroundColor='#ecebeb'
      >
        <rect x='31' y='42' rx='2' ry='2' width='205' height='125' />
      </ContentLoader>
    </>
  )
}

export default ImageLoadingSkeleton
