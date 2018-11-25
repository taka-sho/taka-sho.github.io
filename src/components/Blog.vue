<template lang='pug'>
div
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand
        router-link(to='/') taka-sho.info
          router-link(to='/blog') .Blog
      router-link(to='/') Info
    //- blog_2018_0323
    //- blog_2018_0320
    //- blog_2018_0306
    blog_2018_1125
    blog_2018_1122
</template>

<script lang='ts'>

// import blog_2018_0306 from './Blog/2018-0306'
// import blog_2018_0320 from './Blog/2018-0320'
// import blog_2018_0323 from './Blog/2018-0323'
import blog_2018_1125 from './Blog/2018-1125'
import blog_2018_1122 from './Blog/2018-1122'

export default {
  components: {
    // blog_2018_0306,
    // blog_2018_0320,
    // blog_2018_0323,
    blog_2018_1125,
    blog_2018_1122
  }
}
</script>

<style lang='scss'>

#app {
  margin-top: 80px;
}

a {
  color: #444;
  transition: 300ms;
}

a:hover {
  color: #000;
  text-decoration: none;
}
</style>
