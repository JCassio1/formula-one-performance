import { describe, test, expect, vi } from 'vitest'
import { fetchData, useData } from './FetchData'
import { BASE_URL, DATA_FETCH_LIMIT } from '../../Helpers/Config'
import { sampleAPIResponse } from '../../model/data'

global.fetch = vi.fn()

describe('Data fetch service', () => {
  test.todo('Makes a GET request to fetch 2023 constructor list')
})

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

test('Makes a GET request to fetch contructor list and returns the result', async () => {
  fetch.mockResolvedValue(createFetchResponse(sampleAPIResponse))

  const contructorList = await fetchData(`${BASE_URL}2023/constructors.json?limit=${DATA_FETCH_LIMIT}`)

  expect(contructorList).toStrictEqual(sampleAPIResponse)
})
