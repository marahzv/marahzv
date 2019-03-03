<template>
  <section id="welcome" class="hide-overflow">
    <v-layout id="welcomeLayout" row wrap>
      <v-flex hidden-sm-and-down md4>
        <v-carousel height="700" interval="1500">
          <v-carousel-item v-for="(item,i) in aboutCarousel" :key="i" :src="item.src" />
        </v-carousel>
      </v-flex>
      <v-flex xs12 md8 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <v-layout align-center justify-center>
          <v-flex xs10 md10 class="text-xs-center">
            <base-heading id="m" class="mhv-title hidden-sm-and-down">MARA</base-heading>
            <base-heading id="mhv-sm" class="mhv-title hidden-md-and-up hidden-xs-only">MHV</base-heading>
            <base-heading id="mhv-xs" class="mhv-title hidden-sm-and-up">M</base-heading>
            <hr class="mhv-divider">
            <base-text id="welcome-text">
              For more information or to contact me, please follow the links below to my social media accounts.
            </base-text>
            <social-media large />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  },
  data: () => ({
    aboutCarousel: [
      { src: require('@/assets/about/1.jpg') },
      { src: require('@/assets/about/2.jpg') },
      { src: require('@/assets/about/3.jpg') }
    ]
  })
}
</script>

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
.mhv-divider {
  border-style: none;
  border-bottom: 10px solid #B8CD7B;
}
#m, #mhv-sm {
  font-size: 150px!important;
}
#mhv-xs {
  font-size: 90px!important;
}
#welcome-text {
  margin-top: 30px;
  text-align: justify;
}
</style>
