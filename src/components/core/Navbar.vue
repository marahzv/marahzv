<template>
  <div>
    <v-btn v-for="button in buttons" :key="button.routeName" :to="{ name: button.routeName }" class="navbarButton" color="info" large>
      <v-icon v-if="button.icon" class="btn-icon" dark v-text="button.icon" /> {{ button.name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.navbarButton {
  margin-left: 20px;
  margin-right: 20px;
  width: 220px!important;
}
.btn-icon {
  margin-right: 10px;
}
</style>
