<template>
  <div class="w-4/6 mx-auto bg-white rounded mt-4">
    <item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchFeed } from '~/api/hackernews'
import Item from '~/components/Item.vue'

export default Vue.extend({
  components: { Item },
  data() {
    return {
      items: []
    }
  },
  async fetch() {
    const { feed } = this.$route.params
    this.items = await fetchFeed(feed)
  }
})
</script>
