<template lang="pug">
  div
    h2.mt-0 Skils
    b-container.bv-example-row
      b-row.text-center
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 WEB
              p HTML5, CSS3, JavaScript
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 Node.js
              p VueJS, ReactJS, Angular etc...
        b-col(cols='12' sm='12' md='12' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 And more...
              p
              a(href='https://github.com/takasho-tutrial/' target='_blank') &nbsp;takasho-tutrial
              | &nbsp;on GitHub
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
