import { useEffect, useState } from 'react'
import { useData } from '../hooks/http/FetchData'
import ImageLoadingSkeleton from '../components/UI/ImageLoadingSkeleton'
import SelectBox from '../components/UI/SelectBox'
import UIRaceResult from '../components/UI/UIRaceResult'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import UIYearPicker from '../components/UI/UIYearPicker'
import UIButton from '../components/UI/UIButton'
import Spinner from 'react-bootstrap/Spinner'

const Homepage = () => {
  const [constructorList, setConstructorList] = useState(null)
  const [carConstructorData, setCarConstructorData] = useState(null)

  const [isImageLoading, setIsImageLoading] = useState(true)

  const [choosenBrand, setChoosenBrand] = useState(null)
  const [choosenYear, setChoosenYear] = useState(null)

  const { data, isLoading, isError, error } = useData(
    'https://ergast.com/api/f1/2023/constructors.json?limit=1000',
    'data',
    true
  )

  const {
    data: brandData,
    isLoading: brandIsLoading,
    isError: brandIsError,
    refetch
  } = useData(
    `http://ergast.com/api/f1/${choosenYear}/constructors/${choosenBrand}/results.json?limit=1000`,
    'data',
    false
  )

  const isDataLoading = isLoading || brandIsLoading
  const isDataError = isError || brandIsError

  // Fetch data
  useEffect(() => {
    if (!data) return

    const fetchData = async () => {
      setConstructorList(data.MRData.ConstructorTable.Constructors)
    }

    fetchData()
  }, [data])

  // Image loader
  useEffect(() => {
    const preloadedImage = new Image()
    preloadedImage.src = 'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png'
    preloadedImage.onload = () => {
      setIsImageLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!brandData) return
    setCarConstructorData(brandData)
  }, [brandData])

  const carBrandsSelectLogic = (data) => {
    const brand = data.name
    return (
      <option key={data.constructorId} value={data.constructorId}>
        {brand}
      </option>
    )
  }

  const handleInputChange = () => {
    return (event) => {
      const formEvent = event.target
      if (formEvent.id === 'formBasicBrand') {
        setChoosenBrand(formEvent.value)
      } else if (formEvent.id === 'formBasicYear') {
        setChoosenYear(formEvent.value)
      }
    }
  }

  const handleBrandDataFetch = () => {
    if (choosenBrand || choosenYear) {
      refetch()
    }
  }

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

      {isDataError && (
        <p>
          <strong>An error has occured whilst fetching data. Please reload or try again later ☹️</strong>
        </p>
      )}

      <Row className='mt-5' style={{ minWidth: '300px' }}>
        <Col>
          {!isError && constructorList && (
            <SelectBox
              selectTitle='Select a car brand'
              displaySelectLogic={carBrandsSelectLogic}
              selectAria='Car brand select'
              selectData={constructorList}
              handleOnChange={handleInputChange()}
            />
          )}
        </Col>
        <Col>{!isError && constructorList && <UIYearPicker handleOnChange={handleInputChange()} />}</Col>
      </Row>

      {!isError && constructorList && (
        <div className='mt-3'>
          <UIButton
            buttonText='Search'
            buttonVariant='danger'
            handleOnClick={handleBrandDataFetch}
            isLoading={isDataLoading}
            isDisabled={!choosenBrand || !choosenYear || (choosenYear && choosenYear.length !== 4)}
          />
        </div>
      )}

      <div className='mt-5 '>
        {carConstructorData && <UIRaceResult constructorData={carConstructorData} />}
        {!isDataError && (!constructorList || !carConstructorData) && (
          <p>Select a constructor to display their best circuit</p>
        )}

        <div className='mt-3'>
          <img
            src='https://logos-download.com/wp-content/uploads/2016/03/Rolex_logo.png'
            style={{ height: '10%', width: '5%' }}
            alt='Formula one logo'
          />
        </div>
      </div>
    </>
  )
}

export default Homepage
