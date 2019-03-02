<template>
  <section id="projects">
    <base-page-heading>
      Projects
      <template slot="sub">I have done some really cool things.</template>
    </base-page-heading>
    <feed :data="getProjects" :layout="layout" :single-component="'ProjectsSingle'">
      <slot />
    </feed>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Feed: () => import('@/components/Feed')
  },
  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1]
  }),
  computed: {
    ...mapGetters(['getProjects'])
  }
}
</script>

<style>
  #projects {
    color: #fff;
  }
</style>
