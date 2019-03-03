<template>
  <section id="projects-single">
    <base-page-heading :back-path="{ name: 'Projects' }">
      {{ project.title }}
      <template v-if="project.subtitle" slot="sub">{{ project.subtitle }}</template>
    </base-page-heading>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <base-text v-if="project.text" class="text-xs-center">{{ project.text }}</base-text>
          <v-carousel v-if="project.carousel" :interval="1500" :height="800">
            <v-carousel-item v-for="(item,i) in carousel" :key="i" :src="item.src" />
          </v-carousel>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs8 offset-xs2>
                <iframe v-if="project.video" align="center" width="640" height="564" :src="project.video" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen />
              </v-flex>
            </v-layout>
          </v-container>
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
        this.carousel = images.generateImageUrls(this.project.carousel)
      }
    }
  }
}
</script>
