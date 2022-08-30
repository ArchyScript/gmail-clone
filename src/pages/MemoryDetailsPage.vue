<template>
  <base-layout :pageTitle="singleMemory.title" pageDefaultBackLink="/memories">
    <memory-overview
      :image="singleMemory.image"
      :title="singleMemory.title"
      :description="singleMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { memories } from '@/db/index.ts'
import MemoryOverview from '@/components/memories/MemoryOverview.vue'

export default defineComponent({
  name: 'MemoriesPage',
  components: { MemoryOverview },
  setup() {
    const route = useRoute()
    const singleMemory = ref({
      id: '',
      image: '',
      title: '',
      description: '',
    })

    const getSingleMemory = () => {
      memories.forEach((memory) => {
        if (memory.id === route.params.id) {
          singleMemory.value = memory
        }
      })
    }

    onBeforeMount(() => {
      getSingleMemory()
    })

    return {
      singleMemory,
    }
  },
})
</script>
