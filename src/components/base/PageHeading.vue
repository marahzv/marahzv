<template>
  <v-layout>
    <v-flex sm10 offset-sm1>
      <v-responsive height="200px" class="mt-5 dark">
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
      </v-responsive>
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
  .dark
    color: rgba(0,0,0,.87);
</style>
