<template lang='pug'>
div
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand
        router-link(to='/') Takasho
          router-link(to='/blog') .Blog
      router-link(to='/blog') Info
    router-view
</template>

<script lang='ts'>
export default {
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
