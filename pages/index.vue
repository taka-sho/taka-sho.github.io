<template lang='pug'>
.container
  div(v-for='route in blogRoutes')
    .card
      .card-body
        h5.card-title {{ route }}
        h6.card-subtitle
        p.card-text honyamorake
        router-link(:to="'/blogs/' + route") {{ route }}
  //- ul
  //-   li(v-for='route in blogRoutes')
  //-     router-link(:to="'/blogs/' + route") {{ route }}
</template>

<script>
export default {
  data () {
    return {
      a: this.$router.options.routes
    }
  },
  computed: {
    blogRoutes () {
      let blogRoutes = []
      for (const route in this.a ) {
        const l = this.a[route].path.split('/')
        if (l[1] === 'blogs') {
          blogRoutes.push(l[2])
        }
      }
      return blogRoutes
    }
  }
}
</script>

<style lang='scss'>
</style>
