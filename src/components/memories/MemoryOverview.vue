<template>
  <ion-img :src="image" :alt="title" />

  <h2 class="ion-text-center">
    {{ title }}
  </h2>

  <p class="ion-text-center">
    {{ description }}
  </p>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { IonImg } from '@ionic/vue'

export default defineComponent({
  name: 'MemoriesPage',
  props: {
    title: String,
    description: String,
    image: String,
  },
  components: {
    IonImg,
  },
  setup() {
    return {}
  },
})
</script>
