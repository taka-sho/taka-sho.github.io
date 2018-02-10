<template lang='pug'>
  #app
    b-navbar#header(toggleable='md' type="'dark'" variant='info' fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand Takasho
    b-container.bv-example-row.main
      h2.mt-0 Basics
      b-container.bv-example-row
        b-row.text-center
          b-col
            b-card
              b-media
                h2.mt-0 Name
                p Shotaro Takaharo : Takasho
          b-col
            b-card
              b-media
                h2.mt-0 Birth
                p Born in Jul 11, 1999
          b-col
            b-card
              b-media
                h2.mt-0 Place
                p Setagaya, Tokyo, Japan
      h2.mt-0 Skils
      b-container.bv-example-row
        b-row.text-center
          b-col
            b-card
              b-media
                h2.mt-0 WEB
                p HTML5, CSS3, JavaScript
          b-col
            b-card
              b-media
                h2.mt-0 Node.js
                p VueJS, ReactJS, Angular etc...
          b-col
            b-card
              b-media
                h2.mt-0 And more...
                p
                a(href='https://github.com/takasho-tutrial/' target='_blank') &nbsp;takasho-tutrial
                | &nbsp;on GitHub
      h2.mt-0 Work at
      b-container.bv-example-row
        b-row.text-center
          b-col
            b-card
              b-media
                h2.mt-0
                  a(href='https://uncovertruth.co.jp/' target='_blank') UNCVER TRUTH
                p Jun 2016 ~
                p Frontside engineer
          b-col
            b-card
              b-media
                h2.mt-0
                  a(href='http://lecoco.jp/' target='_blank') Lecoco
                p Jan 2018 ~
                p Frontside engineer
          b-col
            b-card
              b-media
                h2.mt-0
                  a(href='http://lecoco.jp/' target='_blank') LEGO School
                p Apr 2018 ~
                p Technical mentor for
                  a(href='http://www.legoschool.jp/') &nbsp;FLL
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
                        span Keio University
                        br
                        | 慶應義塾大学
      h2.mt-0 Contact
      b-container.bv-example-row
        b-row.text-center
          b-col
            b-card
              h2.mt-0 e-mail
              p takasho530000@gmail.com
          b-col
            b-card
              h2.mt-0 GitHub
              p: a(href='https://github.com/taka-sho/' target='_blank') @taka-sho
          b-col
            b-card
              h2.mt-0 Twitter
              p: a(href='https://twitter.com/takasho_real/' target='_blank') @takasho_real
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
    margin-top: 150px;
    #header {
      box-shadow: 4px 0 2px 2px rgba(100,100,100, 0.5);
    }
    .container {
      margin-bottom: 30px;
    }
  }
</style>
