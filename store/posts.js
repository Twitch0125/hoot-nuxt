import { createNamespacedHelpers } from 'vuex'
import { asyncFunc } from '~/assets/async-func'
import { createMutations } from '~/assets/vuex-helpers'
export const namespace = 'posts'
export const postsModule = createNamespacedHelpers(namespace)
export const state = () => ({
  posts: [],
  loading: false,
})
export const mutations = createMutations('posts', 'loading')

export const actions = {
  async getPosts({ commit }) {
    commit('loading', true)
    const [posts, err] = await asyncFunc(
      this.$axios.$get(`${this.$config.lotide}/posts`)
    )
    console.log(posts)
    if (!err) {
      commit('posts', posts)
    }
    // !err && commit('posts', posts)
    commit('loading', false)
    return [posts, err]
  },
}
