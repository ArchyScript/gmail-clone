<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          e
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>
          Explore
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
          >
            UI Components
          </a>
        </p>
      </div>
      <ion-page>
        <ion-content class="ion-padding">
          <ion-button @click="toggleInfiniteScroll" expand="block">
            Toggle Infinite Scroll
          </ion-button>

          <ion-list>
            <ion-item v-for="item in items" :key="item">
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </ion-list>

          <ion-infinite-scroll
            @ionInfinite="loadData($event)"
            threshold="100px"
            id="infinite-scroll"
            :disabled="isDisabled"
          >
            <ion-infinite-scroll-content
              loading-spinner="bubbles"
              loading-text="Loading more data..."
            ></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-content>
      </ion-page>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  InfiniteScrollCustomEvent,
  IonButton,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from '@ionic/vue'

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
  },

  setup() {
    const isDisabled = ref(false)
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value
    }
    const items = ref<number[]>([])

    const pushData = () => {
      const max = items.value.length + 20
      const min = max - 20
      for (let i = min; i < max; i++) {
        items.value.push(i)
      }
    }

    const loadData = (ev: InfiniteScrollCustomEvent) => {
      setTimeout(() => {
        pushData()
        console.log('Loaded data')
        ev.target.complete()

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length === 1000) {
          ev.target.disabled = true
        }
      }, 500)
    }

    pushData()

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items,
    }
  },
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
