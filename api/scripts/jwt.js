const { randomBytes } = require('crypto')

const secret = randomBytes(32).toString('hex')

console.log("Don't forget to add this to your .env file!")
console.log('JWT Secret:', secret)
