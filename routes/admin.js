const express = require('express')
const router = express.Router()
const users = require('./../inc/user')
const admin = require('./../inc/admin')
const contacts = require('./../inc/contact')

router.use(function (req, res, next) {

  if (['/login'].indexOf(req.url) === -1 && !req.session.user) {
    res.redirect('/admin/login')
  } else {
    next()
  }
})

router.use(function(req, res, next) {
  req.menus = admin.getMenus(req)
  next()
})

router.get('/logout', (req, res, next) => {
  delete req.session.user
  res.redirect('/admin/login')
})


router.get('/', (req, res, next) => {
    res.render('admin/index', admin.getParams(req))
  
})

router.post('/login', (req, res, next) => {
  users.login(req.body.email, req.body.password).then(user => {
    req.session.user = user;
    res.redirect('/admin')
  }).catch(err => {
    users.render(req, res, err.message)
  })
})

router.get('/login', (req, res, next) => {
  users.render(req, res, null)
})

router.get('/contacts', (req, res, next) => {
  contacts.getContacts().then(data => {
    res.render('admin/contacts', admin.getParams(req, {
      data
    }))
  })
  
})

router.get('/emails', (req, res, next) => {
  res.render('admin/emails', admin.getParams(req))
})

router.get('/users', (req, res, next) => {
  res.render('admin/users', admin.getParams(req))
})

module.exports = router
