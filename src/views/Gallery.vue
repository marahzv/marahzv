<template>
  <section id="gallery">
    <base-page-heading>
      GALLERY
    </base-page-heading>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <v-container v-if="gallery" grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex v-for="thumb in gallery" :key="thumb.id" xs3 @click="showLightbox(thumb.name)">
                <v-img :src="require(`@/assets/${baseDir}/${thumbDir}/${thumb.src}`)" class="lightbox-img" contain />
              </v-flex>
            </v-layout>
          </v-container>
          <lightbox v-if="gallery" id="projectLightbox" ref="lightbox" :images="gallery" />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import images from '@/plugins/images'
export default {
  data: () => ({
    baseDir: 'gallery',
    photoDir: 'photos',
    thumbDir: 'thumbs',
    gallery: undefined
  }),
  created () {
    this.initialise()
  },
  methods: {
    initialise () {
      var imageJSON = require('@/data/gallery.json')
      this.gallery = images.generateImageUrls(imageJSON, `${this.baseDir}/${this.photoDir}`)
      console.log(this.gallery)
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
