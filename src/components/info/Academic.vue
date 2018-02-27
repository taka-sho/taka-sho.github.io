<template lang="pug">
  div
    h2.mt-0 Academic background
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
                .junior_high.school
                  p: a(href='http://www.kf.keio.ac.jp/' target='_blank')
                      span Keio Futsubu School
                      br
                      | 慶應義塾普通部
                .high_school.school
                  p: a(href='https://www.hs.keio.ac.jp/' target='_blank')
                      span Keio High School
                      br
                      | 慶應義塾高等学校
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
