<template>
  <li>
    <img
        :src="require(`@/assets/images/${icon}`)"
        :alt="icon">
    <span>{{ text }}</span>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    icon: String
  }
}
</script>
<style scoped>

</style>