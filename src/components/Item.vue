<template>
    <v-card class="card pa-4 mb-4 d-flex flex-column">
        <v-cart-title class="text-h4">{{title}}</v-cart-title>
        <v-card-text class="pa-0 mb-6 mt-6">{{body}}</v-card-text>
        <v-card-action class="d-flex justify-space-between">
            <v-btn variant="outlined" color="#2196F3" @click="openCard(id)">Open</v-btn>
            <v-btn variant="outlined" @click="handleDelete(id)">Delete</v-btn>
        </v-card-action>
    </v-card>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

    export default defineComponent ({
        props: {
            title: String,
            body: String,
            id: Number
        },
        setup() {
            const store = useStore()
            const router = useRouter()
            const handleDelete = (id:number):void => {
                store.commit('deleteItem', id)
            }
            const openCard = (id:number):void => {
                router.push(`/card/${id}`)
            }
            
            return {
                handleDelete,
                openCard,
            }
        }
    })
</script>

<style scoped>
    .card {
        width: 30%;
        min-height: 300px;
    }
</style>