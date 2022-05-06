import aemetApi from './aemetApi'
import HttpService from '../httpService'
import WeatherStation from './models/WeatherStation'
import AemetMetadataResponse from './models/response/AemetMetadataResponse'
import AemetResponse from './models/response/AemetResponse'

export default class AemetService {
  constructor({ apiService = aemetApi, httpService = new HttpService() } = {}) {
    this.apiService = apiService
    this.httpService = httpService
  }

  #getApiKey() {
    return import.meta.env.VITE_API_KEY || ''
  }

  async #getDataAndMetadata({ data, metadata } = {}) {
    return Promise.all([
      this.httpService.get(data),
      this.httpService.get(metadata)
    ])
  }

  getWeatherForStation(idema) {
    const apiKey = this.#getApiKey()
    return this.apiService
      .getStationDataForLast24hours(apiKey, idema)
      .then(res => new AemetResponse(res))
      .then(this.#getDataAndMetadata.bind(this))
      .then(([data, metadata]) => {
        return {
          data: [...data.map(station => new WeatherStation(station))],
          metadata: new AemetMetadataResponse(metadata)
        }
      })
  }
}
