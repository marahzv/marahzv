<template>
  <section id="gallery">
    <base-page-heading>
      GALLERY
    </base-page-heading>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex v-for="thumb in carousel" :key="thumb.id" xs3 @click="showLightbox(thumb.name)">
                <v-img :src="thumb.name" class="lightbox-img" contain />
              </v-flex>
            </v-layout>
          </v-container>
          <lightbox id="projectLightbox" ref="lightbox" :images="carousel" />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    images: undefined
  }),
  created () {
    this.initialise()
  },
  updated () {
    this.initialise()
  },
  methods: {
    initialise () {
      this.images = [] // TODO load images.
    },
    showLightbox (imageName) {
      this.$refs.lightbox.show(imageName)
    }
  }
}
</script>

<style scoped>
.lightbox-img {
  max-width: 400px;
  max-height: 400px;
  cursor: pointer;
  transition: all 0.4s ease;
}
</style>
