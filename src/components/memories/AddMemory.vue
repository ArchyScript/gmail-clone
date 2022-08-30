<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="newMemoryObject.text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea v-model="newMemoryObject.description"></ion-textarea>
      </ion-item>
    </ion-list>

    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { IonItem, IonList, IonTextarea, IonLabel, IonButton } from '@ionic/vue'

export default defineComponent({
  name: 'MemoriesPage',
  emits: ['save-memory'],
  components: {
    IonItem,
    IonList,
    IonTextarea,
    IonLabel,
    IonButton,
  },
  setup(_, { emit }) {
    const newMemoryObject = ref({
      image_url: '',
      title: '',
      description: '',
    })

    const submitForm = () => {
      emit('save-memory')
    }

    return { submitForm, newMemoryObject }
  },
})
</script>
