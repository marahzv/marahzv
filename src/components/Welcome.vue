<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <div class="make-100-vh">
          <v-img
            class="make-full-height"
            :src="require('@/assets/welcome.png')"
          />
        </div>
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md10
          >
            <base-heading id="mara">
              Mara
            </base-heading>
            <base-heading id="h">
              Hernandez
            </base-heading>
            <base-heading id="v">
              Villanueva
            </base-heading>
            <base-text>
              Welcome to my page!<br>
              Hope you have a great time
            </base-text>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<style>
.make-100-vh {
  height: 100vh;
  padding: 100px 20px 100px 20px;
}
.make-full-height {
  height: 100%;

}
#mara {
  font-size: 150px!important;
  font-weight: 500!important
}

#h, #v {
  font-size: 90px!important;
}
</style>
