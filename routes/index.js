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

module.exports = router;