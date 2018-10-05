<template lang='pug'>
div
  b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
    b-navbar-toggle(target='nav_collapse')
    b-navbar-brand taka-sho.info
  nuxt.content
    router-view
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 80px;
}
#header {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
