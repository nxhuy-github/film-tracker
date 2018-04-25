<template>
<div>
    <v-layout>
        <v-flex xs6>
          <film-metadata :film="film"/>
        </v-flex>
        <v-flex xs6 class="ml-2">
          <youtube-view :youtubeId="film.youtubeId"/>
        </v-flex>
    </v-layout>
    <v-layout class="mt-2">
        <v-flex xs6 >
          <description :description="film.description"></description>
        </v-flex>
        <v-flex xs6 class="ml-2">
          <starring :starring="film.starring"></starring>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import FilmService from '@/services/FilmService'
import Panel from '@/components/Panel'
import FilmMetadata from './FilmMetadata'
import YoutubeView from './YoutubeView'
import Starring from './Starring'
import Description from './Description'

export default {
  data () {
    return {
      film: {}
    }
  },
  components: {
    Panel,
    FilmMetadata,
    YoutubeView,
    Starring,
    Description
  },
  async mounted () {
    const filmId = this.$store.state.route.params.filmId
    const film = await FilmService.show(filmId)
    this.film = film.data
  }
}
</script>

<style scoped>
.film{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

</style>
