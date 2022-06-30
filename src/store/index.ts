import { createStore } from 'vuex'
import PostsModel from '@/models/PostsModel'


export default createStore({
  strict: true,
  state: {
    posts: [] as PostsModel[]
  },
  getters: {
    getCard(state, id:number|string) {
      return state.posts.find(item => item.id === id)
    },
    getAll(state) {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts:Array<PostsModel>) {
      state.posts = posts
    },
    deleteItem(state, id:number) {
      state.posts = state.posts.filter(item => {
        return item.id !== id
      })
    }
  },
  actions: {
    setPosts({commit}, posts:Array<PostsModel>) {
      commit('setPosts', posts)
    },
    deleteItem({commit}, id:number) {
      commit('deleteItem', id)
    }
  },
  modules: {
  }
})

