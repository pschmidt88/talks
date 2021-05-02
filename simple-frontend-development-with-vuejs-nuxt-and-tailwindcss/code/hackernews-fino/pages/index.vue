<template>
  <div class="bg-white md:w-4/6 w-full mx-auto mt-4 rounded">
    <post v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Post from '~/components/Post.vue'

export default defineComponent({
  components: { Post },
  setup() {
    const posts = [{
      id: "27011013",
      user: "textread",
      points: 247,
      time: "1619912798",
      url: "https://arxiv.org/abs/2004.02504",
      title: "Bringing GNU Emacs to Native Code (2020)",
      comments_count: 16
    },
    {
      id: "27012687",
      user: "rmason",
      points: 41,
      time: "1619935285",
      url: "https://www.secondwavemedia.com/epicenter/features/local-asphalt-company-paves-recycled-plastic-roads.aspx",
      title: "Michigan asphalt company paves first US public roads containing recycled plastic",
      comments_count: 9
    },
    {
      id: "27010556",
      user: "todsacerdoti",
      points: 198,
      time: "1619908980",
      url: "https://linmob.net/will-linux-phones-stay-around-this-time/",
      title: "Will Linux phones stay around this time?",
      comments_count: 35
    },
    ]

    return { posts }
  },
})
</script>
