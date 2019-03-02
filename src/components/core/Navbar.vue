<template>
  <div>
    <v-btn v-for="button in buttons" :key="button.routeName" :to="{ name: button.routeName }" class="navbar-button" color="info" flat large>
      <v-icon v-if="button.icon" class="btn-icon" v-text="button.icon" /> {{ button.name }}
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
.navbar-button {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 220px!important;
  border-radius: 0;
}
.navbar-button:before {
  background-color: transparent;
}
.navbar-button:hover {
  background-color: transparent;
  border-bottom: 2px solid #B8CD7B;
  border-radius: 0;
}
.btn-icon {
  margin-right: 10px;
}
</style>
