<template>
  <section id="about" class="hide-overflow">
    <v-layout id="about-layout" row wrap>
      <v-flex id="about-layout-left" hidden-sm-and-down md4 class="animated slideInLeft">
        <v-carousel height="600" interval="1500" hide-delimiters>
          <v-carousel-item v-for="(item,i) in aboutCarousel" :key="i" :src="item.src" />
        </v-carousel>
      </v-flex>
      <v-flex id="about-layout-right" xs12 md8 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <v-layout align-center justify-center>
          <v-flex xs10 md10 class="text-xs-center animated slideInRight">
            <base-heading id="m" class="mhv-title hidden-sm-and-down">MARA</base-heading>
            <base-heading id="mhv-sm" class="mhv-title hidden-md-and-up hidden-xs-only">MHV</base-heading>
            <base-heading id="mhv-xs" class="mhv-title hidden-sm-and-up">M</base-heading>
            <base-divider />
            <base-text id="about-text">
              Hola, I’m Mara. Mexican Fashion Management final year student loving life in the UK! I am an extrovert and a collaborator, which means I am great in team-work but also highly adaptable. I love meeting new people and learning about different cultures; I enjoy travelling and trying new food.

              <center>
                <iframe align="center" width="640" height="564" src="https://player.vimeo.com/video/327177826" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen />
              </center>
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
      { src: require('@/assets/about/3.jpg') },
      { src: require('@/assets/about/4.jpg') },
      { src: require('@/assets/about/5.jpg') },
      { src: require('@/assets/about/6.jpg') },
      { src: require('@/assets/about/7.jpg') },
      { src: require('@/assets/about/8.jpg') },
      { src: require('@/assets/about/9.jpg') },
      { src: require('@/assets/about/10.jpg') },
      { src: require('@/assets/about/11.jpg') },
      { src: require('@/assets/about/12.jpg') },
      { src: require('@/assets/about/13.jpg') }
    ]
  })
}
</script>

<style scoped>
#about-layout {
  padding: 50px 50px 50px 50px;
}
#about-layout-left {
  height: 100vh;

}
#about-layout-right {
  height: 100vh;
  overflow: scroll;
  padding-bottom: 100px;
}
.mhv-title {
  font-weight: 800!important;
  margin-bottom: -20px!important;
}
#m, #mhv-sm {
  font-size: 150px!important;
}
#mhv-xs {
  font-size: 90px!important;
}
#about-text {
  margin-top: 30px;
  text-align: justify;
}
</style>
