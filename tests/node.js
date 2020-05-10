// eslint-disable-next-line node/no-missing-require
const nothing = require('./nowhere')

// eslint-disable-next-line no-var
var x = 1

// eslint-disable-next-line fp/no-mutation
x.y = 7

// eslint-disable-next-line node/no-exports-assign
exports = nothing
