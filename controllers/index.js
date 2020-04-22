const items = [
    {id: 1, name: 'product1'},
    {id: 2, name: 'product2'},
    {id: 3, name: 'product3'},
    {id: 4, name: 'product4'}
]

const index = (req, res) => {
    res.render('index', {
        title : 'My Web Store'
    });
};

const listOfProducts =  (req, res, next) => {
    res.render('products', {
        title : 'List of Products',
        items : items
    });
};

    const newProduct =  (req, res, next) => {
    const { item } = req.body;
    items.push({
        id : items.length + 1,
        name : item
    });
    res.redirect('/products')
   };

   module.exports = {
       index ,
       listOfProducts ,
       newProduct
   }