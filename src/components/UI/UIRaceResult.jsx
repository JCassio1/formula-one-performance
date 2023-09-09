import UICard from './UICard'
import { convertLapTimeToSeconds } from '../../Helpers/Helpers'
import { STYLES } from '../../Helpers/Config'

const UIRaceResult = ({ constructorData }) => {
  if (constructorData == null || (constructorData && constructorData?.MRData?.total == '0')) {
    return (
      <p>
        Oops... there's no historical data for your selected constructor. Try picking another constructor or year 😶
      </p>
    )
  }

  let result = null

  let constructorPosition = null
  let constructorLapTime = null
  let constructorBestPerformance = null

  const constructorRacesArray = constructorData.MRData.RaceTable.Races

  // Checks for race marked with position 1 (i.e. first place). If more than one is found, then lap time is used
  constructorRacesArray.map((constructor) => {
    const results = constructor?.Results[0]
    const currentBestPerformance = constructorBestPerformance?.Results[0]

    if (constructorPosition == null && results?.status === 'Finished') {
      constructorPosition = parseInt(results?.position)
      constructorBestPerformance = constructor
      constructorLapTime = currentBestPerformance?.FastestLap?.Time?.time ?? 'N/A'
    } else if (constructorPosition > parseInt(results?.position) && constructor.Results[0].status === 'Finished') {
      constructorPosition = parseInt(results?.position)
      constructorBestPerformance = constructor
      constructorLapTime = currentBestPerformance?.FastestLap?.Time?.time ?? 'N/A'
    } else if (constructorPosition === parseInt(results?.position) && results?.status === 'Finished') {
      if (
        convertLapTimeToSeconds(results?.FastestLap?.Time?.time) >
        convertLapTimeToSeconds(currentBestPerformance?.FastestLap?.Time?.time)
      ) {
        constructorBestPerformance = constructor
        constructorLapTime = currentBestPerformance?.FastestLap?.Time?.time ?? 'N/A'
      }
    }
  })

  const carConstructor = constructorBestPerformance?.Results[0]?.Constructor.name
  const constructorCircuit = constructorBestPerformance?.Circuit?.circuitName
  const season = constructorBestPerformance?.season

  switch (constructorPosition) {
    case 1:
      result = (
        <p>
          <strong>{carConstructor}</strong> did perform extremely well as they came in
          <strong> #{constructorPosition}</strong> at <strong>{constructorCircuit}</strong> with a lap time of{' '}
          <strong>{constructorLapTime}</strong>. Their best for the <strong>{season}</strong> season.
        </p>
      )
      break

    default:
      result = (
        <p>
          <strong>{carConstructor}</strong> came in
          <strong> #{constructorPosition}</strong> at <strong>{constructorCircuit}</strong> with a lap time of{' '}
          <strong>{constructorLapTime}</strong>. Their best for the <strong>{season}</strong> season.
        </p>
      )
      break
  }

  return (
    <>
      <div style={STYLES.cardBorderRadius}>
        <UICard displayText={result} constructorRaceData={constructorBestPerformance} />
      </div>
    </>
  )
}

export default UIRaceResult
