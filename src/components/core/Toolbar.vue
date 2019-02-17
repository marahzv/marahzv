<template>
  <v-toolbar
    color="transparent"
    app
    flat
  >
    <v-spacer />
    <SocialMedia />
  </v-toolbar>
</template>

<script>
export default {
  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  }
}
</script>
