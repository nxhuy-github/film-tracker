<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <film-search-panel />
      <film-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import FilmService from '@/services/FilmService'
import FilmPanel from './FilmPanel'
import FilmSearchPanel from './FilmSearchPanel'

export default {
  data () {
    return {
      films: null
    }
  },
  components: {
    FilmPanel,
    FilmSearchPanel
  },
  async mounted () {
    const films = await FilmService.index()
    this.films = films.data
  }
}
</script>

<style scoped>
.film{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.film-title{
  font-size: 30px;
}

.film-genre{
  font-size: 24px;
}

.film-director{
  font-size: 18px;
}

.image-film {
  width: 70%;
  margin: 0 auto;
}
</style>
