<template lang='pug'>
  #app
    b-container.bv-example-row.main
      Basics
      Skils
      Workat
      Academics
      Contact
</template>

<script lang='ts'>
import Academics from '~/components/Info/Academics'
import Basics from '~/components/Info/Basics.vue'
import Contact from '~/components/Info/Contact'
import Skils from '~/components/Info/Skils'
import Workat from '~/components/Info/Workat'

export default {
  components: {
    Academics,
    Basics,
    Contact,
    Skils,
    Workat
  }
}
</script>

<style lang="scss">
.row > div {
  margin-bottom: 20px;
}
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
   font-family: Arial, sans-serif;
   font-weight: 0;
   color: #333;
 }
 #app {
   #header {
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
