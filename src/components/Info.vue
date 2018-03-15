<template lang='pug'>
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand Takasho
    b-container.bv-example-row.main
      Basics
      Skils
      Workat
      Academics
      Contacts
</template>

<script lang='ts'>
import Basics from './info/Basics'
import Skils from './info/Skils'
import Workat from './info/Workat'
import Academics from './info/Academics'
import Contacts from './info/Contacts'

export default {
  components: {
    Basics,
    Skils,
    Workat,
    Academics,
    Contacts
  }
}
</script>

<style lang='scss'>
  p {
    font-family: Arial, sans-serif;
    color: #888;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arial, sans-serif;
    font-weight: 0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #88f;
  }

  #app {
    margin-top: 150px;

    #header {
      box-shadow: 4px 0 2px 2px rgba(100, 100, 100, 0.5);
    }

    .container {
      margin-bottom: 30px;
    }
  }
</style>
