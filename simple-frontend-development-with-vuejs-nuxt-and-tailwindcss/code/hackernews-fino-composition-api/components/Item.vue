<template>
  <div class="p-4 border-b leading-6 border-gray-100 flex items-center">
    <div class="text-xl font-bold mr-4 w-1/12 text-center">
      {{ post.score }}
    </div>

    <div class="flex flex-col w-11/12">
      <span>
        <a :href="post.url" target="_blank">{{ post.title }}</a>
        <span class="font-light" v-if="host.length > 0">({{ host }})</span>
      </span>
      <span class="text-sm text-gray-600">
        <span>
          by user
          <span class="underline">{{ post.by }}</span>
        </span>

        <span> {{ timeAgo }} ago </span>
        <span class="border-l pl-1"> {{ commentCount }} comments </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Item } from '~/server/api/items'

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Item>,
      required: true,
    },
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
    commentCount(): number {
      return this.post.kids ? Object.values(this.post.kids).length : 0
    },
    host(): string {
      const url = this.post.url ? this.post.url : ""
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
      const between = Date.now() / 1000 - Number(this.post.time)
      if (between < 3600) {
        return this.pluralize(~~(between / 60), ' minute')
      } else if (between < 86400) {
        return this.pluralize(~~(between / 3600), ' hour')
      } else {
        return this.pluralize(~~(between / 86400), ' day')
      }
    },
  },
  setup() {},
})
</script>

