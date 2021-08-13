import { createNamespacedHelpers } from 'vuex'
import { asyncFunc } from '~/assets/utils'
import { createMutations } from '~/assets/vuex-helpers'
export const namespace = 'posts'
export const postsModule = createNamespacedHelpers(namespace)
export const state = () => ({
  posts: [],
  loading: false
})
export const mutations = createMutations('posts', 'loading')

export const actions = {
  async getPosts({ commit }) {
    commit('loading', true)
    const [posts, err] = await asyncFunc(
      this.$http.$get(`${this.$config.lotide}/posts`)
    )
    if (!err) {
      commit('posts', posts)
    }
    // !err && commit('posts', posts)
    commit('loading', false)
    return [posts, err]
  }
}
