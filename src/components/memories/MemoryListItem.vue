<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title" />
    </ion-thumbnail>

    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue'

export default defineComponent({
  name: 'MemoriesPage',
  props: {
    memory: Object,
  },
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  setup() {
    return {}
  },
})
</script>
