const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')

// router.get('/fakeUser', async (req, res) => {
//     const user = new User({email: 'sarthak@gmail.com', username:'sarthak'})
//     const newUser = await User.register(user, 'sarthakabcd')
//     res.send(newUser)
// })

router.get('/register', async (req, res) => {
    res.render('auth/signup')
})

router.post('/register', async (req, res) => {
    try {
        const user = new User({ email: req.body.email, username: req.body.username })
        const newUser = await User.register(user, req.body.password);
        console.log(newUser)
        req.flash('success', 'Registered Successfully!')
        res.redirect('/products')
    }
    catch(e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }
})

router.get('/login', async (req, res) => {
    res.render('auth/login')
})

router.post('/login', 
    passport.authenticate('local', 
    {
        failureRedirect: '/login',
        failureFlash: true
    }),
    (req, res) => {
        req.flash('success', 'Welcome Back!!')
        res.redirect('/products')
    }
)

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success', 'logged out successfully!!')
    res.redirect('/login')
})

module.exports = router;