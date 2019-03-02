<template>
  <section id="projects">
    <base-page-heading :back-path="{ name: 'Projects' }">
      Projects Single
      <template slot="sub">I have done some really cool things.</template>
    </base-page-heading>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12>
          <code>{{ project }}</code>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    project: undefined
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
    }
  }
}
</script>

<style>
  #projects {
    color: #fff;
  }
</style>
