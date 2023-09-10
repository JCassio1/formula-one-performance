import { useQuery } from 'react-query'
import axios from 'axios'

export const fetchData = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export const useData = (url, saveField, isEnabled) => {
  return useQuery([saveField, url], () => fetchData(url), {
    enabled: isEnabled
  })
}
