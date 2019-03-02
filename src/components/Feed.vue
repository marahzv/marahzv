<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>
      <feed-card
        v-for="(item, slug, i) in data"
        :key="slug"
        :slug="slug"
        :size="layout[i]"
        :value="item"
        :to="{ name: singleComponent, params: { slug: slug } }"
      />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Feed',
  components: {
    FeedCard: () => import('@/components/FeedCard')
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    layout: {
      type: Array,
      default: () => ([])
    },
    singleComponent: {
      type: String,
      default: undefined
    }
  }
}
</script>
