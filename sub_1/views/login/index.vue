<template>
  <div class="text-gray-400 text-sm lg:text-lg text-right">
    <!-- <div v-if="isAuthenticated">
      Welcome, {{ loggedInUser }} | <button @click="logout">logout</button> |
      <nuxt-link to="/bookshelf">bookshelf</nuxt-link>
    </div> -->
    <div>
      <nuxt-link to="/login">login</nuxt-link> |
      <nuxt-link to="/signup">signup</nuxt-link> |
      <nuxt-link to="/bookshelf">bookshelf</nuxt-link>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  // computed: {
  //   ...mapGetters(['isAuthenticated', 'loggedInUser']),
  // },
  // methods: {
  //   logout() {
  //     this.$store.commit('logout')
  //     const current = this.$route.name
  //     if (current === 'bookshelf') {
  //       this.$router.go()
  //     }
  //   },
  // },
}
</script>
