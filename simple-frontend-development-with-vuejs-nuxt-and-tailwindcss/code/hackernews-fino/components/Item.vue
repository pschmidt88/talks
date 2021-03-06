<template>
  <div class="p-4 border-b leading-6 flex items-center">
    <div class="text-xl font-bold mr-4 w-1/12 text-center">
      {{ item.score }}
    </div>

    <div class="flex flex-col w-11/12">
      <span>
        <a :href="item.url" target="_blank">
          {{ item.title }}
        </a>
        <span class="font-light" v-if="hasComments">({{ host }})</span>
      </span>

      <span class="text-sm text-gray-600">
        <span>
          by user
          <span class="underline">{{ item.by }}</span>
        </span>

        <span>{{ timeAgo }} ago</span>
        <span class="border-l pl-1">{{ commentCount }} comments</span>
      </span>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    pluralize(time: number, label: string) {
      if (time === 1) {
        return time + label
      }
      return time + label + 's'
    },
  },
  computed: {
    hasComments(): boolean {
      return this.host.length > 0
    },
    commentCount(): Number {
      return this.item.kids ? this.item.kids.length : 0
    },
    host(): string {
      const url = this.item.url ? this.item.url : ""
      const host = url.replace(/^https?:\/\//, '')
        .replace(/\/.*$/, '')
        .replace('?id=', '/')
      const parts = host?.split('.').slice(-3)
      if (parts[0] === 'www') {
        parts.shift()
      }
      return parts.join('.')
    },
    timeAgo(): string {
      const between = Date.now() / 1000 - Number(this.item.time)
      if (between < 3600) {
        return this.pluralize(~~(between / 60), ' minute')
      } else if (between < 86400) {
        return this.pluralize(~~(between / 3600), ' hour')
      } else {
        return this.pluralize(~~(between / 86400), ' day')
      }
    },
  }
})
</script>
