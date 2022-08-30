<template>
  <base-layout pageTitle="Add Memory" pageDefaultBackLink="/memories">
    <add-memory @save-memory="saveMemory"></add-memory>
  </base-layout>
</template>

<script lang="ts">
import AddMemory from '@/components/memories/AddMemory.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MemoriesPage',
  components: { AddMemory },
  setup() {
    const saveMemory = (memoryData: any) => {
      console.log(memoryData)
    }

    return { saveMemory }
  },
})
</script>
