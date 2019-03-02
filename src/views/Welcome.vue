<template>
  <section id="welcome" class="hide-overflow">
    <core-toolbar />
    <v-layout id="welcomeLayout" row wrap>
      <v-flex hidden-sm-and-down md6>
        <v-img id="profileImg" :src="require('@/assets/welcome.jpg')" />
      </v-flex>
      <v-flex xs12 md6 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <v-layout align-center justify-center>
          <v-flex xs10 md10 class="text-xs-center">
            <base-heading id="m">Mara</base-heading>
            <base-heading id="h">Hernandez</base-heading>
            <base-heading id="v">Villanueva</base-heading>
            <base-text>
              Multilingual final year Bachelor of Arts student focused in Fashion Management/Marketing from the University of Southampton.
            </base-text>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex id="navbar" class="text-xs-center justify-center" md12>
        <core-navbar :buttons="buttons" />
      </v-flex>
    </v-layout>
    <core-footer />
  </section>
</template>

<script>
export default {
  components: {
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreNavbar: () => import('@/components/core/Navbar'),
    CoreFooter: () => import('@/components/core/Footer')
  },
  data: () => ({
    buttons: [
      {
        name: 'Work Experience',
        routeName: 'Experience',
        icon: 'mdi-briefcase-outline'
      },
      {
        name: 'Projects',
        routeName: 'Projects',
        icon: 'mdi-folder-multiple-outline'
      },
      {
        name: 'About',
        routeName: 'About',
        icon: 'mdi-information-outline'
      },
      {
        name: 'Contact Me',
        routeName: 'Contact',
        icon: 'mdi-account-box-outline'
      }
    ]
  })
}
</script>

<style>
#welcomeLayout {
  padding: 50px 50px 50px 50px;
}
#profileImg {
  height: 600px;
}
#navbar {
  margin-top: 50px;
}
#m {
  font-size: 150px!important;
  font-weight: 500!important
}
#h, #v {
  font-size: 90px!important;
}
</style>
