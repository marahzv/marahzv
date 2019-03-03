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
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
