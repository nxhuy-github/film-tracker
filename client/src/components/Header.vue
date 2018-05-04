<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        FilmTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'films'}">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="$store.getters.isUserLoggedIn === false" flat dark :to="{name: 'login'}">
          Sign In
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn v-if="$store.getters.isUserLoggedIn === false" flat dark :to="{name: 'register'}">
          Sign Up
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn v-if="$store.getters.isUserLoggedIn === true" flat dark :to="{name: 'logout'}">
          Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
</style>
