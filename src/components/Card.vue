<template>
    <v-container>
        <h2>{{cardItem.title}}</h2>
        <p>{{cardItem.body}}</p>
        <v-btn @click="deleteCard(cardItem.id)">delete</v-btn>
    </v-container>
</template>

<script lang='ts'>
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import { defineComponent, computed } from 'vue'
    export default defineComponent({
        setup() {
            const store = useStore()
            const route = useRoute()
            const router = useRouter()

            const cardItems = computed(() => store.state.posts)
            const cardItem = cardItems.value.find((item:any) => {
                if (item.id == route.params.id) {
                    return item
                }
            })

            const deleteCard = (id:number) => {
                store.dispatch('deleteItem', id)
                router.replace('/',)
            }
            return {
                cardItem,
                deleteCard
            }
            
            
        }
    })
</script>

<style lang="scss" scoped>

</style>