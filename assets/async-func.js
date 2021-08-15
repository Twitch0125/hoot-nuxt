export const asyncFunc = async (promise) => {
  try {
    const data = await promise
    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
