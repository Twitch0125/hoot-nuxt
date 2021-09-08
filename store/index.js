export const actions = {
  nuxtServerInit(_, { $storage, $axios, store }) {
    const token = $storage.getUniversal('token')
    if (token) {
      $axios.setToken(token, 'Bearer')
      store.dispatch('user/refresh')
    }
  },
}
