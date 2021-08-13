export const mut = (key) => (state, value) => (state[key] = value)

export const createMutations = (...keys) => {
  const obj = {}
  keys.forEach((key) => (obj[key] = mut(key)))
  return obj
}
