<template lang='pug'>
b-container
  b-row
    b-col
      b-card
        b-media
          b-btn(
            variant='primary'
            v-on:click='t'
            v-b-toggle.collapse2018-1125
          ) 「裏切らないもの」<span>2018/11/25</span>
          b-collapse#collapse2018-1125
            p 人生を送っていると，少なからず裏切られることがある．仕方がないものもあれば，意図的に裏切られることもある．前者は誰も悪くないけれど，後者はそのヒトの鏡なのかな．
            p さて，もちろん私も19年という期間を生きていた中で裏切られたことはたくさんある．遊びの約束を切られたり，友達が友達でなくなったり．
            | しかし，各個人が全てのヒトに対して純情を抱いているわけはない．むしろほとんどのヒトは他人のことなんてどうでもいいと思っている．
            p 私はなるべく色々なヒトの期待に答えたい．これは，私自身がヒトから裏切られて悲しかったり辛かったりと，短期的に見れば負の感情を抱いたことが大きな原因だと思う．
            p しかし，自分が期待に答えたからと言って他人に期待してはいけない．それでは私が潰れてしまう．
            | 先述した通り，他人なんてどうでもいいというのが基本的なヒトの感情である．
            p 年齢を重ねるほど建前が増えてゆき，ヒトの感情が読み取りにくくなっている．たとえ純情を抱いたとしても，ヒトから見ればそれは建前に過ぎないのかもしれない．
            p でも，私は少しでも多くの人に純粋に接していきたい．もしそれがヒトに受け入れられないとしても．
            b-btn(
              variant='primary'
              v-on:click='t'
              v-b-toggle.collapse2018-1125
            ) 閉じる
</template>

<script lang='ts'>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
span {
  font-size: 10px;
  font-weight: 0;
}
</style>
