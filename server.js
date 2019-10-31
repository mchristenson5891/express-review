const express = require('express')
const methodOverride = require('method-override')



const app = express()

let users = require('./data/users')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('index.ejs', {
    users: users
  })
})

app.post('/', (req, res) => {
  users.push(req.body)
  res.redirect('/')
})

app.delete('/:index', (req, res) => {
  console.log('hitting delete', req.params.index)
  const filterUsers = users.filter((user, index) => index !== Number(req.params.index)
  )
  users = filterUsers
  res.redirect('/')
})

app.listen(3030, () => {
  console.log('now on port')
})