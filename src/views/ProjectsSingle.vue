<template>
  <section id="projects-single">
    <base-page-heading>
      {{ project.title }}
      <template v-if="project.subtitle" slot="sub">{{ project.subtitle }}</template>
    </base-page-heading>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <base-text v-if="project.text" class="text-xs-center">{{ project.text }}</base-text>
          <v-container v-if="project.video" grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs8 offset-xs2>
                <iframe align="center" width="640" height="564" :src="project.video" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen />
              </v-flex>
            </v-layout>
          </v-container>
          <v-container v-if="project.carousel" grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex v-for="thumb in carousel" :key="thumb.id" xs4 @click="showLightbox(thumb.name)">
                <v-img :src="thumb.name" class="lightbox-img" contain />
              </v-flex>
            </v-layout>
          </v-container>
          <lightbox v-if="project.carousel" id="projectLightbox" ref="lightbox" :images="carousel" />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import images from '@/plugins/images'
export default {
  data: () => ({
    project: undefined,
    carousel: undefined
  }),
  computed: {
    ...mapGetters(['getProjectsBySlug'])
  },
  created () {
    this.initialise()
  },
  updated () {
    this.initialise()
  },
  methods: {
    initialise () {
      this.project = this.getProjectsBySlug(this.$route.params.slug)
      if (this.project.carousel) {
        this.carousel = images.generateImageUrls(this.project.carousel, 'projects')
      }
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
