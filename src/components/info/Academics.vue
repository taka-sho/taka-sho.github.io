<template lang="pug">
  div
    h2.mt-0 Academic backgrounds
    b-container.bv-example-row
      b-row.text-center
        b-col
          b-card
            b-media
              .schools
                .primary.school
                  p: a(href='https://es.swu.ac.jp/' target='_blank')
                      span Showa Primary School
                      br
                      | 昭和小学校
        b-col
          b-card
            b-media
              .schools
                .junior_high.school
                  p: a(href='http://www.kf.keio.ac.jp/' target='_blank')
                      span Keio Futsubu School
                      br
                      | 慶應義塾普通部
    b-container.bv-example-row
      b-row.text-center
        b-col
          b-card
            b-media
              .schools
                .high_school.school
                  p: a(href='https://www.hs.keio.ac.jp/' target='_blank')
                      span Keio High School
                      br
                      | 慶應義塾高等学校
        b-col
          b-card
            b-media
              .schools
                .university.school
                  p: a(href='https://www.keio.ac.jp/' target='_blank')
                      span Faculty of science and Technology, Keio University
                      br
                      | 慶應義塾大学 理工学部
</template>

<script lang='ts'>
export default {
}
</script>

<style lang="scss">
</style>
