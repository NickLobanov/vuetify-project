<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import {useStore} from 'vuex'
import Header from './components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',

  components: {
    Header,
    Main,
    Footer
  },

  setup() {
    const store = useStore()
    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => response.json())
        .then(json => store.dispatch('setPosts', json))
    })
    
  },
})
</script>
