const express = require('express')
const router = express.Router()
const Product = require("../models/product")
const Review = require("../models/review")
const {isLoggedIn} = require('../middleware')

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products })
    }
    catch(e) {
        console.log("Something Went Wrong")
        req.flash('error', 'Cannot find products')
        res.render('error')
    }
})

router.get('/products/new', isLoggedIn ,(req, res) => {
    res.render('products/new')
})

router.post('/products', isLoggedIn, async (req, res) => {
    try {
        await Product.create(req.body.product)
        req.flash('success', 'Product created successfully')
        res.redirect('/products')
    }
    catch(e) {
        console.log("Something Went Wrong")
        req.flash('error', 'Cannot create new product')
        res.render('error')
    }
})

router.get('/products/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('reviews')
        res.render('products/show', { product })
    }
    catch(e) {
        console.log(e.message)
        req.flash('error', 'Cannot find this product')
        res.redirect('/error')
    }
})

router.get('/products/:id/edit', isLoggedIn, async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('products/edit', {product})
})

router.patch('/products/:id', isLoggedIn, async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body.product)
    req.flash('success','Updated successfully')
    res.redirect(`/products/${req.params.id}`)
})

router.delete('/products/:id', isLoggedIn, async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/products')
})

router.post('/products/:id/review', isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        const review = new Review({
            user: req.user.username,
            ...req.body
        })
        product.reviews.push(review)
        await review.save();
        await product.save();

        req.flash('success', 'Successfully added your review!')
        res.redirect(`/products/${req.params.id}`);
    }
    catch(e) {
        console.log(e.message);
        req.flash('error', 'Cannot add review to this Product');
        res.redirect('/error');
    }
})

router.get('/error', (req, res) => {
    res.status(500).render('error')
})

module.exports = router;