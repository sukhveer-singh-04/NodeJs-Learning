const express = require('express');
const app = express();

const port = 8080;

app.use(express.json());

//1.API 1: List of the products 
global.products = [{
    "id" : 1
    
  }];

// Adding the product list using POST - method:
app.post('/product', function (req, res) {

    res.header('Content-Type', 'application/json');
    res.send(req.body);
    products.push(req.body);

})

//2. API 2: Fetching all the items in the products - list using GET - method:
app.get('/products', (req, res) => {

    res.set('Content-Type', 'application/json')
    res.status(200).send({
        status: true,
        message: 'OK',
        data: products
    });
});

// 3. API 3: Fetching single item using the 'id' of the item with the help of GET - method:
app.get('/product/:id', function (req, res) {

    const output = products.find((ele) => { return req.params.id == ele.id; })
    if (output) res.status(200).send({
        status: true,
        message: 'OK',
        data: output
    });
    else {
        res.status(405).send(
            {
                status: false,
                message: "Id does not match.",
                data: 'undefined'
            }
        )
    }
    res.end();

});




// app.get("/product/:id", (req, res) => {
//     const id = req.params.id;
//     const product = products.find((p) => {
//         return id == p.id;
//     });
//     // console.log(product);
//     if (product === 'undefined') {
//         return res.status(405).send({
//             status: false,
//             message: "product not found",
//             data: undefined,
//         });
//     }
//     else{
//     res.status(200).send({
//         status: true,
//         message: "ok",
//         data: product,
//     })};
// });












//4. API 4: Updating the individual item using the PUT - method:
app.put('/product/:id', (req, res) => {

    app.param('id', function (req, res, next, id) {

        const result = products.find((ele) => { return id == ele.id; });

        if (result !== undefined) {
            const index = products.findIndex(ele => { return id == ele.id; });
            const replaceData = req.body;
            products.splice(index, 1, replaceData);
            res.status(200).send({
                status: true,
                message: 'OK',
                data: replaceData
            });
        }
        else {
            res.status(405).send({
                status: false,
                message: "Product not found.",
                data: 'undefined'
            });
        }

    })
    res.end();
});

//5. API 5: Deleting individual item from the list using the DELETE - method:
app.delete('/product/:id', function (req, res) {
    app.param('id', (req, res, next, id) => {
        const result = products.find((ele) => id == ele.id);

        if (result !== undefined) {
            const index = products.findIndex((ele) => {
                return id === ele.id;
            })
            products.splice(index, 1);
            res.status(200).send({
                status: true,
                message: 'OK',
                data: 'undefined'
            });
        }
        else {
            res.status(405).send({
                status: false,
                message: 'Product not found.',
                data: 'undefined'
            });
        }
    })
    res.end();
});

// Listening to the server at port number - 8080:
app.listen(port, console.log(`Server is listening at  ${port}`));