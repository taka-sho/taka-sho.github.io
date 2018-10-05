<template lang="pug">
  div
    h2.mt-0 Academic backgrounds
    b-container.bv-example-row
      b-row.text-center
        b-col(v-for='school in schools' cols='12' sm='12' md='6' lg='6' xl='6')
          b-card
            b-media
              .schools
                .primary.school
                  p: a(v-bind:href='school.url' target='_blank')
                      span {{ school.en }}
                      br
                      | {{ school.ja}}
</template>

<script>
export default {
  data () {
    return {
      schools: [
        { en: 'Showa Primary School', ja: '昭和小学校', url: 'https://es.swu.ac.jp/'},
        { en: 'Keio Futsubu School', ja: '慶應義塾普通部', url: 'http://www.kf.keio.ac.jp/'},
        { en: 'Keio High School', ja: '慶應義塾高等学校', url: 'https://www.hs.keio.ac.jp/'},
        { en: 'Faculty of science and Technology, Keio University', ja: '慶應義塾大学 理工学部', url: 'https://www.keio.ac.jp/'}
      ]
    }
  }
}
</script>
