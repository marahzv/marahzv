<template>
  <component :is="tag" class="v-heading mb-3 font-weight-light">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>
