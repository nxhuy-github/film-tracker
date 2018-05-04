<template>
  <v-layout>
    <v-flex xs4>
        <panel title="Film Metadata">
            <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="film.title"
            ></v-text-field>
            <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="film.genre"
            ></v-text-field>
            <v-text-field
            label="Director"
            required
            :rules="[required]"
            v-model="film.director"
            ></v-text-field>
            <v-text-field
            label="Production Company"
            required
            :rules="[required]"
            v-model="film.production_company"
            ></v-text-field>
            <v-text-field
            label="Poster URL"
            required
            :rules="[required]"
            v-model="film.posterURL"
            ></v-text-field>
            <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="film.youtubeId"
            ></v-text-field>
        </panel>
    </v-flex>
  <v-flex xs8>
    <panel title="Film Starring" class="ml-2">
        <v-text-field
        label="Starring"
        required
        :rules="[required]"
        v-model="film.starring"
        multi-line
        ></v-text-field>
    </panel>
    <panel title="Film Description" class="ml-2">
        <v-text-field
        label="Description"
        required
        :rules="[required]"
        v-model="film.description"
        multi-line
        ></v-text-field>
    </panel>
    <div class="error" v-if="error">
        {{ error }}
    </div>
    <v-btn
        dark
        class="cyan"
        @click="save"
    >
    Save Film
    </v-btn>
  </v-flex>
  </v-layout>
</template>

<script>
import FilmService from '@/services/FilmService'

export default {
  data () {
    return {
      film: {
        title: null,
        genre: null,
        director: null,
        production_company: null,
        posterURL: null,
        youtubeId: null,
        starring: null,
        description: null
      },
      error: null,
      required: (value) => !!value || 'Required!'
    }
  },
  methods: {
    async save () {
      this.error = null
      delete this.film['createdAt']
      delete this.film['updatedAt']
      console.log(this.film)
      const areAllFieldsFilledIn = Object
        .keys(this.film)
        .every(key => !!this.film[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        await FilmService.put(this.film)
        this.$router.push({
          name: 'film',
          params: {
            filmId: this.$store.state.route.params.filmId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const filmId = this.$store.state.route.params.filmId
      const film = await FilmService.show(filmId)
      this.film = film.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
