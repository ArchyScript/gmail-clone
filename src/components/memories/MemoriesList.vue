<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :memory="memory"
      :key="memory.id"
    ></memory-list-item>
  </ion-list>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { IonList } from '@ionic/vue'
import MemoryListItem from './MemoryListItem.vue'

export default defineComponent({
  name: 'MemoriesList',
  props: { memories: Array },
  components: {
    IonList,
    MemoryListItem,
  },
  setup() {
    return {}
  },
})
</script>
