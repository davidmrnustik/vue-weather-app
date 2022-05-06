import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    loading: false,
    weatherData: []
  }),
  actions: {
    setLoading(loading) {
      this.loading = loading
    },
    setWeatherData(data) {
      this.weatherData = data
    }
  }
})
