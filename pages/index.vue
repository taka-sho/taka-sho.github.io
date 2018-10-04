<template lang='pug'>
  //- router-link(:to="item.path")
  .honya
    div(v-for="item in items")
      p {{ item.name }}
</template>

<script>
export default {
  created() {
    this.$router.options.routes.forEach((route) => {
      if (route.name.match(/blog/)) {
        this.items.push({
          name: route.name,
          path: route.path
        })
      }
    })
    console.log(this.items);
  }
  ,
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="css">
</style>
