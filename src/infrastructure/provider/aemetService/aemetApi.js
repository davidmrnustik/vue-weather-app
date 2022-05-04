import HttpService from '../httpService'

const URL = 'https://opendata.aemet.es/opendata/api'
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
  getDataAndMetadata(apiKey, idema) {
    const options = {
      method: 'GET',
      headers: getHeaders(apiKey)
    }
    const url = `${URL}/observacion/convencional/datos/estacion/${idema}`

    return httpService.get(url, options)
  }
}
