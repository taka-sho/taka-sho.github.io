<template lang="pug">
  div
    h2.mt-0 Contacs
    b-container.bv-example-row
      b-row.text-center
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            h2.mt-0 e-mail
            p: a(href='mailto:takasho530000@gmail.com') takasho@keio.jp
        b-col(cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            h2.mt-0 GitHub
            p: a(href='https://github.com/taka-sho/' target='_blank') @taka-sho
        b-col(cols='12' sm='12' md='12' lg='4' xl='4')
          b-card
            h2.mt-0 Twitter
            p: a(href='https://twitter.com/taka_sho_fe/' target='_blank') @taka_sho_fe
</template>

<script lang='ts'>
export default {
}
</script>
