<template lang="pug">
  div
    h2.mt-0 Contacts
    b-container.bv-example-row
      b-row.text-center
        b-col(v-for='contact in contacts' cols='12' sm='12' md='6' lg='4' xl='4')
          b-card
            h2.mt-0 {{ contact.name }}
            p: a(v-bind:href='contact.href' target='_blank') {{ contact.address }}
</template>

<script lang='ts'>
export default {
  data () {
    return {
      contacts: [
        {
          name: 'e-mail',
          address: 'takasho@keio.jp',
          href: 'mailto:takasho530000@gmail.com'
        },
        {
          name: 'GitHub',
          address: '@taka-sho',
          href: 'https://github.com/taka-sho/'
        },
        {
          name: 'Twitter',
          address: '@taka_sho_fe',
          href: 'https://twitter.com/taka_sho_fe/'
        }
      ]
    }
  }
}
</script>
