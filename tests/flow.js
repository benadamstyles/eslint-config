// @flow

// eslint-disable-next-line no-var
var a = 1

// eslint-disable-next-line fp/no-mutation
a.b = 7

const x: number = 5

console.log(x)

export const value = await Promise.resolve(true)
