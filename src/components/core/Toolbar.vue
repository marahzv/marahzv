<template>
  <div>
    <v-toolbar color="#fafafa" app flat fixed scroll-off-screen>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="title-toolbar"><router-link :to="{ path: '/' }">MARA</router-link></v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="button in navbarButtons" :key="button.routeName" :to="{ name: button.routeName }" class="navbar-button-toolbar font-large" exact-active-class="navbar-button-toolbar-active" color="info" text exact>
          {{ button.name }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer id="drawer" v-model="drawer" temporary absolute>
      <v-list>
        <v-list-tile v-for="button in navbarButtons" :key="button.routeName" :to="{ name: button.routeName }" exact-active-class="navbar-button-toolbar-active" exact>
          <v-list-tile-content>
            <v-list-tile-title class="font-large">{{ button.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import navbar from '@/plugins/navbar'
export default {
  data: () => ({
    drawer: false
  }),
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
  background-color: transparent;
}
.font-large {
  font-size: 18px;
  text-transform: uppercase;
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
.navbar-button-toolbar-active div {
  color: rgba(0,0,0,.87)!important;
  font-weight: 800!important;
}
</style>
