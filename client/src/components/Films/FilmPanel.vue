<template>
      <panel title="Films">
        <v-btn fab class="cyan accent-2" light small absolute right middle slot="action"
        :to="{name: 'films-create'}">
          <v-icon>add</v-icon>
        </v-btn>
        <div class="film" v-for="film in films" :key="film.id">
          <v-layout>
            <v-flex xs6>
              <div class="film-title">
                {{ film.title }}
              </div>
              <div class="film-genre">
                {{ film.genre }}
              </div>
              <div class="film-director">
                {{ film.director }}
              </div>
              <v-btn
                dark
                class="cyan"
                :to="{name: 'film', params: {filmId: film.id}}"
              >
              View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="film.posterURL" class="image-film">
            </v-flex>
          </v-layout>
        </div>
      </panel>
</template>

<script>
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      films: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.films = (await FilmService.index(value)).data
      }
    }
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
