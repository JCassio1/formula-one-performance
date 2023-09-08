import { useEffect, useState } from 'react'
import ImageLoadingSkeleton from '../components/UI/ImageLoadingSkeleton'
import { useData } from '../hooks/http/FetchData'
import Spinner from 'react-bootstrap/Spinner'

const Homepage = () => {
  const { data, isLoading, isError, error } = useData(
    'https://ergast.com/api/f1/2023/constructors.json?limit=1000',
    'data',
    true
  )

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

      <p style={{ marginBottom: '10px' }}>Discover the best circuit for each car brand from the F1 2023</p>
      {isLoading && (
        <p>
          <strong style={{ marginRight: '12px' }}>Loading Data</strong>
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
            style={{ marginRight: '10px' }}
          />
        </p>
      )}
    </>
  )
}

export default Homepage
