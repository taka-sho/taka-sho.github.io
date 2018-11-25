<template lang='pug'>
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand taka-sho.info
      //- router-link(to='/blog') Blog
    b-container.bv-example-row.main
      Basics
      Skils
      Workat
      Academics
      Contact
</template>

<script lang='ts'>
import Basics from './info/Basics'
import Skils from './info/Skils'
import Workat from './info/Workat'
import Academics from './info/Academics'
import Contact from './info/Contact'

export default {
  components: {
    Basics,
    Skils,
    Workat,
    Academics,
    Contact
  }
}
</script>

<style lang='scss'>
  p {
    font-family: HiraginoSans-W2, ヒラギノ角ゴシック W2, sans-serif;
    color: #888;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: HiraginoSans-W2, ヒラギノ角ゴシック W2, sans-serif;
    font-weight: 0;
    color: #333;
  }

  #app {
    margin-top: 150px;

    #header {
      box-shadow: 4px 0 2px 2px rgba(100, 100, 100, 0.5);

      a {
        text-decoration: none;
        color: #444;
      }
    }

    .container {
      margin-bottom: 30px;

      a {
        text-decoration: none;
        color: #88f;
      }
    }
  }
</style>
