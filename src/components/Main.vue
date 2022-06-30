<template>
    <v-container class="d-flex justify-space-between flex-wrap">
        <Item v-for="item in posts" :title='item.title' :id='item.id' :body='item.body' :key="item.id"/>
    </v-container>
</template>

<script>
    import Item from '@/components/Item.vue'
    import { defineComponent, computed } from '@vue/runtime-core'
    import {useStore} from 'vuex'
    export default defineComponent({
      components: {
          Item
      },
      setup() {
          const store = useStore()
          
          return {
              posts: computed(() => store.state.posts)
          } 
      }  
    })
</script>

<style lang="scss" scoped>

</style>