export const actions = {
  nuxtServerInit(_, { $storage, $http, store }) {
    const token = $storage.getUniversal('token')
    if (token) {
      $http.setToken(token, 'Bearer')
      store.dispatch('user/refresh')
    }
  }
}
