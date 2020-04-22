const express = require('express');
const router = express.Router();

const items = [
    {id: 1, name: 'product1'},
    {id: 2, name: 'product2'},
    {id: 3, name: 'product3'},
    {id: 4, name: 'product4'}
]

router.get('/', (req, res) => {
    res.render('index', {
        title : 'My Web Store'
    });
});

router.get('/products', (req, res, next) => {
    res.render('products', {
        title : 'List of Products',
        items : items
    });
});

router.post('/new-product', (req, res, next) => {
 const { item } = req.body;
 items.push({
     id : items.length + 1,
     name : item
 });
 res.redirect('/products')
})

module.exports = router;