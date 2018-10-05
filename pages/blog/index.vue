<template lang="pug">
b-container.bv-example-row.main
  div(v-for="item in items")
    router-link(:to="item.path") {{ item.path.replace(/\/blog/, '') }}
</template>

<script lang='ts'>
export default {
  created () {
    this.$router.options.routes.forEach((route) => {
      const url = route.path
      if (url.match(/blog/) && (url.split('/').length === 3)) {
        this.items.push({
          name: route.name,
          path: route.path
        })
      }
    })
  },
  data() {
    return {
      items: [],
      routes: []
    }
  }
}
</script>

<style lang="css">
</style>
