<template>
  <section id="experience">
    <base-page-heading>
      Work Experience
      <template slot="sub">I have done some really cool things.</template>
    </base-page-heading>
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
export default {
  components: {
    Feed: () => import('@/components/Feed')
  }
}
</script>

<style>
  #experience {
    color: #fff;
  }
</style>
