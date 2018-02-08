<template lang='pug'>
  #app
    header
      .title
        h1 Takasho
    .main
      .info
        .me
          h2 About
          .name
            h3 Name
            p Shotaro Takahara (髙原 照太郎)
          .skils
            h3 skils
            p WEB: HTML5, CSS3, JavaScript
            p Node.js: VueJS, ReactJS, Angular etc...
            p Ruby: on Rails, Sinatra
        .histories
          h2 Histories
          table
            tr
              th Period
              th Place
            tr
              td Jun 2016 ~
              td at&nbsp;
                a(href='https://uncovertruth.co.jp' target='_blank') UNCVER TRUTH
            tr
              td Feb 2018 ~
              td at&nbsp;
                a(href='http://lecoco.jp' target='_blank') Lecoco
        .others
          h2 Others
          .github.other
            p
              a(href='https://github.com/taka-sho/' target='_blank') @taka-sho
              | &nbsp;on GitHub
          .twitter.other
            p
              a(href='https://twitter.com/takasho_real/' target='_blank') @takasho_real
              | &nbsp;on Twitter
          .schools
            h2 Academic Background
            .primary.school
              p: a(href='https://es.swu.ac.jp/' target='_blank')
                  span Showa Primary School
                  br
                  | 昭和小学校
            .junior_high.school
              p: a(href='http://www.kf.keio.ac.jp/' target='_blank')
                  span Keio Futsubu Schoo
                  br
                  | 慶應義塾普通部
            .high_school.school
              p: a(href='https://www.hs.keio.ac.jp/' target='_blank')
                  span Keio High School
                  br
                  | 慶應義塾高等学校
            .university.school
              p: a(href='https://www.keio.ac.jp/' target='_blank')
                  span Keio University
                  br
                  | 慶應大学
</template>

<script lang='ts'>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
  p {
    font-family: "HiraginoSans-W2","ヒラギノ角ゴシック W2";
    color: #888;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "HiraginoSans-W0","ヒラギノ角ゴシック W0";
    font-weight: 0;
    color: #333;
  }
  a{
    text-decoration: none;
    color: #88f;
  }
  #app {
    .main {
      .schools {
        .school {
          font-size: 14px;
          a {
            span {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
