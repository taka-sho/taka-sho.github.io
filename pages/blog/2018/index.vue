<template lang="pug">
  div
    router-link(to='/blog') to blog top
    div(v-for="item in items")
      router-link(:to="item.path") {{ item.path }}
</template>

<script lang='ts'>
export default {
  created () {
    this.$router.options.routes.forEach((route) => {
      const url = route.path
      if (url.match(/blog/) && (url.split('/').length === 4) && url.split('/')[2] === '2018') {
        this.items.push({
          name: route.name,
          path: route.path
        })
      }
    })
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="css">
</style>
