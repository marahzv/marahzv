<template>
  <v-toolbar :color="color" app flat fixed scroll-off-screen>
    <v-toolbar-items v-if="showNavbarButtons">
      <v-btn :to="{ path: '/' }" class="navbar-button-toolbar" color="info" text>Home</v-btn>
      <v-btn v-for="button in navbarButtons" :key="button.routeName" :to="{ name: button.routeName }" class="navbar-button-toolbar" color="info" text>
        {{ button.name }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <SocialMedia class="hidden-xs-only" />
  </v-toolbar>
</template>

<script>
import navbar from '@/plugins/navbar'
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  },
  computed: {
    showNavbarButtons: function () {
      return this.$route.path !== '/'
    },
    navbarButtons: function () {
      return navbar.buttons
    },
    color: function () {
      return this.$route.path === '/' ? 'transparent' : '#fafafa'
    }
  }
}
</script>

<style scoped>
.navbar-button-toolbar {
  border-bottom: 5px solid transparent;
  border-radius: 0;
}
.navbar-button-toolbar:before {
  background-color: transparent;
}
.navbar-button-toolbar:hover {
  background-color: transparent;
  border-bottom: 5px solid #B8CD7B;
  border-radius: 0;
}
</style>
