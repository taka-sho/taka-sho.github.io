<template lang="pug">
  div
    h2.mt-0 Work at
    b-container.bv-example-row
      b-row.text-center
        b-col(v-for='work in works' cols='12' sm='12' md='12' lg='6' xl='6')
          b-card
            b-media
              h2.mt-0
                a(v-bind:href='work.url' target='_blank') {{ work.name }}
              p {{ work.since }}
              p {{ work.type }}
</template>

<script lang='ts'>
export default {
  data () {
    return {
      works: [
        {
          name: 'UNCOVER TRUTH Inc.',
          url: 'https://uncovertruth.co.jp/',
          since: 'Jun 2016 ~',
          type: 'Frontside engineer'
        },
        {
          name: 'LEGO School',
          url: 'http://www.legoschool.jp/',
          since: 'Apr 2018 ~',
          type: 'Technical mentor'
        }
      ]
    }
  }
}
</script>
