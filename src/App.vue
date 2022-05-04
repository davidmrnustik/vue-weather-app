<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <input
        type="text"
        v-model.trim="search"
        id="searchField"
        placeholder="enter station name"
      />
      <button @click="onClick" type="button" :disabled="loading">search</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import AemetService from './infrastructure/provider/aemetService/AemetService'
import { useAppStore } from './stores/app'
import { mapState, mapWritableState } from 'pinia/dist/pinia'

export default {
  data() {
    return {
      search: '8368U',
      weatherData: []
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    async onClick() {
      if (!this.search) {
        return
      }
      this.setLoading(true)
      const aemetService = new AemetService()
      this.weatherData = await aemetService
        .getWeatherForStation(this.search)
        .catch(err => console.log(err))
        .finally(() => this.setLoading(false))
    }
  },
  computed: {
    ...mapState(useAppStore, ['loading']),
    ...mapWritableState(useAppStore, ['setLoading'])
  }
}
</script>
