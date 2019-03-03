<template>
  <div>
    <v-btn
      v-for="(item, i) in items"
      :key="i"
      fab
      class="ma-2"
      :large="large"
      color="info"
      :href="item.link"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      {
        name: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/marahzv/'
      },
      {
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/mara-hernandez-villanueva-37980a171/'
      },
      {
        name: 'GitHub',
        icon: 'mdi-git',
        link: 'https://github.com/marahzv'
      },
      {
        name: 'Email',
        icon: 'mdi-email',
        link: 'mailto:marahzv@gmail.com'
      }
    ]
  })
}
</script>
