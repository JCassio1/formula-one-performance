export function convertLapTimeToSeconds(lapTime) {
  if (lapTime === undefined || lapTime === null) {
    return null
  }
  const parts = lapTime.split(/:|\./)
  const minutes = parseInt(parts[0], 10)
  const seconds = parseInt(parts[1], 10)
  const milliseconds = parseInt(parts[2], 10)
  return minutes * 60 + seconds + milliseconds / 1000
}
