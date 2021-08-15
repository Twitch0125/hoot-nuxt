import test from 'ava'
import { asyncFunc } from '~/assets/async-func'

test('Returns a Promise with an Array', async (t) => {
  const result = await asyncFunc(
    new Promise((resolve) => {
      resolve('test')
    })
  )
  t.is(Array.isArray(result), true)
})

test("1st value in the array is promise's resolved value, and the 2nd is null", async (t) => {
  const result = await asyncFunc(new Promise((resolve) => resolve('test')))
  t.is(result[0], 'test')
  t.is(result[1], null)
})

test('2nd value in the array is an error if there was one, and the 1st is null', async (t) => {
  const result = await asyncFunc(
    new Promise((resolve, reject) => {
      reject(new Error('whoops'))
    })
  )
  t.is(result[0], null)
  t.not(result[1], null)
})
