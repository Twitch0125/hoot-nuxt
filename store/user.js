/* eslint-disable camelcase */
import { createNamespacedHelpers } from 'vuex'
import { asyncFunc } from '~/assets/async-func'
import { createMutations } from '~/assets/vuex-helpers'
export const namespace = 'user'
export const userModule = createNamespacedHelpers(namespace)
export const state = () => ({
  id: null,
  username: null,
  isSiteAdmin: false,
  hasUnreadNotification: false,
  token: null,
  loading: false,
})

export const mutations = createMutations(
  'id',
  'username',
  'isSiteAdmin',
  'hasUnreadNotification',
  'token',
  'loading'
)

export const actions = {
  async register({ commit }, { username, password, email_address = null }) {
    const body = { username, password, login: true }
    if (email_address) {
      body.email_address = email_address
    }
    const [data, err] = await asyncFunc(
      this.$axios.$post(`${this.$config.lotide}/users`, body)
    )
    if (data) {
      const {
        id,
        username: usernameData,
        is_site_admin,
        has_unread_notification,
      } = data.user
      this.$storage.setUniversal('token', data.token)
      this.$axios.setToken(data.token, 'Bearer')
      commit('token', data.token)
      commit('id', id)
      commit('username', usernameData)
      commit('isSiteAdmin', is_site_admin)
      commit('hasUnreadNotification', has_unread_notification)
    }
    return [data, err]
  },
  async signin({ commit }, { username, password }) {
    const [data, err] = await asyncFunc(
      this.$axios.$post(`${this.$config.lotide}/logins`, { username, password })
    )
    if (data) {
      const {
        id,
        username: usernameData,
        is_site_admin,
        has_unread_notification,
      } = data.user
      this.$storage.setUniversal('token', data.token)
      this.$axios.setToken(data.token, 'Bearer')
      commit('token', data.token)
      commit('id', id)
      commit('username', usernameData)
      commit('isSiteAdmin', is_site_admin)
      commit('hasUnreadNotification', has_unread_notification)
    }
    return [data, err]
  },
  // should be called when the user's token has been saved
  async refresh({ commit }) {
    const [data, err] = await asyncFunc(
      this.$axios.$get(`${this.$config.lotide}/logins/~current`)
    )
    if (data) {
      const {
        id,
        username: usernameData,
        is_site_admin,
        has_unread_notification,
      } = data.user
      commit('id', id)
      commit('username', usernameData)
      commit('isSiteAdmin', is_site_admin)
      commit('hasUnreadNotification', has_unread_notification)
    }
    return [data, err]
  },
  async signout({ commit }) {
    const [data, err] = await asyncFunc(
      this.$axios.$delete(`${this.$config.lotide}/logins/~current`)
    )
    if (!err) {
      this.$storage.removeUniversal('token')
      this.$axios.setToken(false)
      commit('token', null)
      commit('id', null)
      commit('username', null)
      commit('isSiteAdmin', false)
      commit('hasUnreadNotification', false)
    }
    return [data, err]
  },
}
