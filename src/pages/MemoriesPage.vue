<template>
  <base-layout pageTitle="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>

    <memories-list :memories="allMemories"></memories-list>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IonButton, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import MemoriesList from '@/components/memories/MemoriesList.vue'
import { memories } from '@/db/index'

export default defineComponent({
  name: 'MemoriesPage',
  components: {
    MemoriesList,
    IonButton,
    IonIcon,
  },
  setup() {
    const allMemories = ref(memories)
    return { allMemories, add }
  },
})
</script>
