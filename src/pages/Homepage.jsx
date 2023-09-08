import { useEffect, useState } from 'react'
import ImageLoadingSkeleton from '../components/UI/ImageLoadingSkeleton'

const Homepage = () => {
  const [isImageLoading, setIsImageLoading] = useState(true)

  // Image loader
  useEffect(() => {
    const preloadedImage = new Image()
    preloadedImage.src = 'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png'
    preloadedImage.onload = () => {
      setIsImageLoading(false)
    }
  }, [])

  return (
    <>
      {isImageLoading ? (
        <ImageLoadingSkeleton />
      ) : (
        <img
          src='https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png'
          style={{ height: '30%', width: '20%' }}
          alt='Formula one logo'
        />
      )}
    </>
  )
}

export default Homepage
