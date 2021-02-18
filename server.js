const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, Colorado and the rocky mountain mile high region!')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
