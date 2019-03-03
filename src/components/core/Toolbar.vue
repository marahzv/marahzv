<template>
  <v-toolbar color="#fafafa" app flat fixed scroll-off-screen>
    <v-toolbar-title class="title-toolbar"><router-link :to="{ path: '/' }">MARA</router-link></v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn :to="{ path: '/' }" class="navbar-button-toolbar" exact-active-class="navbar-button-toolbar-active" color="info" text exact>Home</v-btn>
      <v-btn v-for="button in navbarButtons" :key="button.routeName" :to="{ name: button.routeName }" class="navbar-button-toolbar" exact-active-class="navbar-button-toolbar-active" color="info" text exact>
        {{ button.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import navbar from '@/plugins/navbar'
export default {
  computed: {
    navbarButtons: function () {
      return navbar.buttons
    }
  }
}
</script>

<style scoped>
.title-toolbar a {
  font-weight: 800!important;
  text-decoration: none;
  color: rgba(0,0,0,.87)!important;
}
.navbar-button-toolbar {
  border-bottom: 5px solid transparent;
  border-radius: 0;
  font-size: 18px;
  background-color: transparent;
}
.navbar-button-toolbar:before {
  background-color: transparent;
}
.navbar-button-toolbar:hover {
  border-bottom: 5px solid #B8CD7B;
}
.navbar-button-toolbar-active {
  font-weight: 800!important;
}
</style>
