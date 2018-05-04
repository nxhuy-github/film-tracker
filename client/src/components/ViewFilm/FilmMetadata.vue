<template>
  <panel title="Film Metadata">
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
          :to="{name: 'film-edit', params () { return {filmId: film.id} }}"
        >
        Edit
        </v-btn>
        </v-flex>
        <v-flex xs6>
            <img :src="film.posterURL" class="image-film">
            <br>
            {{ film.production_company}}
        </v-flex>
        </v-layout>
  </panel>
</template>

<script>

export default {
  props: [
    'film'
  ]
}
</script>

<style scoped>
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
