<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Films">
        <v-btn fab class="cyan accent-2" light small absolute right middle slot="action"
        @click="navigateTo({name: 'films-create'})">
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
                @click="navigateTo({name: 'film', params: {filmId: film.id}})"
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
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      films: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    const films = await FilmService.index()
    this.films = films.data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
