<template>
  <section id="welcome" class="hide-overflow">
    <v-layout id="welcomeLayout" row wrap>
      <v-flex hidden-sm-and-down md4 class="animated slideInLeft">
        <v-img id="profileImg" :src="require('@/assets/welcome.jpg')" />
      </v-flex>
      <v-flex xs12 md8 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <v-layout align-center justify-center>
          <v-flex xs10 md10 class="text-xs-center animated slideInRight">
            <base-heading id="m" class="mhv-title hidden-sm-and-down">MARA</base-heading>
            <base-heading id="mhv-sm" class="mhv-title hidden-md-and-up hidden-xs-only">MHV</base-heading>
            <base-heading id="mhv-xs" class="mhv-title hidden-sm-and-up">M</base-heading>
            <base-divider />
            <base-heading id="h" class="mhv-title hidden-sm-and-down">HERNANDEZ</base-heading>
            <base-heading id="v" class="mhv-title hidden-sm-and-down">VILLANUEVA</base-heading>
            <base-text id="welcome-text">
              Multilingual final year Bachelor of Arts student focused in Fashion Management/Marketing from the University of Southampton.  Experienced Sales and Operations Intern with a demonstrated history of working in Marketing, Buying and  Hospitality. Skilled in Visual Communication and Design.
            </base-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<style scoped>
#welcomeLayout {
  padding: 50px 50px 50px 50px;
}
#profileImg {
  max-height: 600px;
}
#navbar {
  margin-top: 50px;
}
.mhv-title {
  font-weight: 800!important;
  margin-bottom: -20px!important;
}
#m, #mhv-sm {
  font-size: 150px!important;
}
#h, #v, #mhv-xs {
  font-size: 90px!important;
}
#welcome-text {
  margin-top: 30px;
  text-align: justify;
}
</style>
