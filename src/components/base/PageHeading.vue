<template>
  <v-layout>
    <v-flex sm10 offset-sm1>
      <v-responsive class="mt-5 dark">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">
                <slot />
              </h3>
              <span class="subheading">
                <slot name="sub" />
              </span>
              <base-divider />
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-flex>
  </v-layout>
</template>

<style lang="sass" scoped>
  .v-icon
    margin-right: 10px;
  .display-3
    font-family: Raleway,sans-serif!important;
  .dark
    color: rgba(0,0,0,.87);
</style>
