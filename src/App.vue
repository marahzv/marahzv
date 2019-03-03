<template>
  <v-app>
    <core-toolbar />
    <router-view />
    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreFooter: () => import('@/components/core/Footer')
  }
}
</script>

<style>
section {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
