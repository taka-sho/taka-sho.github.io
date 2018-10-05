<template lang='pug'>
  div
    h2.mt-0 Basics
    b-container.bv-example-row
      b-row.text-center
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 Name
              p Shotaro Takahara : Takasho
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 Birth
              p Born in Jul 11, 1999
        b-col(cols='12' sm='12' md='12' lg='4' xl='4')
          b-card
            b-media
              h2.mt-0 Place
              p Setagaya, Tokyo, Japan
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
