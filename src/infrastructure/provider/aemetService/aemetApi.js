import HttpService from '../httpService'

const URL = import.meta.env.VITE_AEMET_BASE_URL || 'http://localhost:3000'
const httpService = new HttpService()

const getHeaders = api => {
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  if (api) {
    headers.append('api_key', api)
  }

  return headers
}

export default {
  getStationDataForLast24hours(apiKey, idema) {
    const options = {
      method: 'GET',
      headers: getHeaders(apiKey)
    }
    const url = `${URL}/observacion/convencional/datos/estacion/${idema}`

    return httpService.get(url, options)
  }
}
