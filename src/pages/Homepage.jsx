import { useEffect, useState } from 'react'
import { useData } from '../hooks/http/FetchData'
import ImageLoadingSkeleton from '../components/UI/ImageLoadingSkeleton'
import SelectBox from '../components/UI/SelectBox'
import UIRaceResult from '../components/UI/UIRaceResult'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import UIYearPicker from '../components/UI/UIYearPicker'
import UIButton from '../components/UI/UIButton'
import { BASE_URL, STYLES, DATA_FETCH_LIMIT } from '../Helpers/Config'
import Loading from '../components/UI/Loading'
import Error from '../components/UI/Error'

const Homepage = () => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [choosenConstructor, setchoosenConstructor] = useState(null)
  const [choosenYear, setChoosenYear] = useState(null)
  const [carConstructorData, setCarConstructorData] = useState(null)

  const { data, isLoading, isError } = useData(
    `${BASE_URL}2023/constructors.json?limit=${DATA_FETCH_LIMIT}`,
    'data',
    true
  )
  const {
    data: constructorData,
    isLoading: constructorLoading,
    isError: constructorLoadingIsError,
    refetch
  } = useData(
    `${BASE_URL}${choosenYear}/constructors/${choosenConstructor}/results.json?limit=${DATA_FETCH_LIMIT}`,
    'constructor',
    false
  )

  const constructorList = data?.MRData?.ConstructorTable?.Constructors
  const isDataLoading = isLoading || constructorLoading
  const isDataError = isError || constructorLoadingIsError

  // Image loader
  useEffect(() => {
    const preloadedImage = new Image()
    preloadedImage.src = 'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png'
    preloadedImage.onload = () => {
      setIsImageLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!constructorData) return
    setCarConstructorData(constructorData)
  }, [constructorData])

  const ConstructorSelectLogic = (data) => {
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
        setchoosenConstructor(formEvent.value)
      } else if (formEvent.id === 'formBasicYear') {
        setChoosenYear(formEvent.value)
      }
    }
  }

  const handleConstructorDataFetch = () => {
    if (choosenConstructor || choosenYear) {
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
          style={STYLES.img}
          alt='Formula one logo'
        />
      )}
      <p style={STYLES.marginBottom(10)}>Discover the best circuit for each car constructor from the F1 2023</p>
      {isLoading && <Loading loadingText='Loading' />}

      {isDataError && (
        <Error ErrorMessage='An error has occured whilst fetching data. Please reload or try again later ☹️' />
      )}

      <Row className='mt-5' style={STYLES.minWidth(300)}>
        <Col>
          {!isError && constructorList && (
            <SelectBox
              selectTitle='Select a constructor'
              displaySelectLogic={ConstructorSelectLogic}
              selectAria='Car constructor select'
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
            handleOnClick={handleConstructorDataFetch}
            isLoading={isDataLoading}
            isDisabled={!choosenConstructor || !choosenYear || (choosenYear && choosenYear.length !== 4)}
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
            style={STYLES.sponsorLogo}
            alt='Formula one logo'
          />
        </div>
      </div>
    </>
  )
}

export default Homepage
