<template>
  <v-layout>
    <v-flex sm10 offset-sm1>
      <v-jumbotron height="200px" class="mt-5">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">
                <slot />
              </h3>
              <span class="subheading">
                <slot name="sub" />
              </span>
              <v-divider class="my-3" />
              <v-btn :to="backPath" color="info">
                <v-icon dark>mdi-arrow-left</v-icon> Back
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    backPath: {
      type: Object,
      default: function () { return { path: '/' } }
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-icon
    margin-right: 10px;
  .display-3
    font-family: Raleway,sans-serif!important;
</style>
