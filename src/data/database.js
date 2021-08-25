const mongoose = require('mongoose')
const MONGODB = process.env.MONGODB_URL

const connect = () => {mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectad a com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }