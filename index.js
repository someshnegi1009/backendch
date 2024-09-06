const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ANITA NEGI! KHANA DO BHOOK LAGRI')
})

app.get('/login', (req, res) => {
    res.send('<h1>please put your mouth shut hehehhe</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})