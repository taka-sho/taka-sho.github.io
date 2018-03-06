<template lang='pug'>
div
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand
        router-link(to='/') Takasho
          router-link(to='/blog') .Blog
      router-link(to='/') Info
    blog_2018_0306
</template>

<script lang='ts'>

import blog_2018_0306 from './Blog/2018-0306'

export default {
  components: {
    blog_2018_0306
  }
}
</script>

<style lang='scss'>

#app {
  margin-top: 80px;
}

a {
  color: #444;
  transition: .3s;
}

a:hover {
  color: #000;
  text-decoration: none;
}
</style>
