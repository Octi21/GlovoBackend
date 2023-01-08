const express = require('express')
// const expressGraphQL = require('express-graphql')
// const { assertWrappingType } = require('graphql')

const app = express()


// assertWrappingType.use('/graphql',expressGraphQL({
//   qraphiql:true
// }))

app.listen(3001,()=> console.log('server running'))