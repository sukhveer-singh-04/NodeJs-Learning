// const { json } = require('body-parser');
const express = require('express');
const app = express();

const port = 8080;

// List of the products 
products = [
    {
        "id": 1, "title": "T1", "price": "100 Rs", "category": "Grocery", "description": "The list of the items brought.", "image": "img1"
    },
    {
        "id": 2, "title": "T2", "price": "200 Rs", "category": "Grocery", "description": "The list of the items brought.", "image": "img2"
    },
    {
        "id": 3, "title": "T3", "price": "300 Rs", "category": "Grocery", "description": "The list of the items brought.", "image": "img3"
    }];


// Adding the product list using POST - method:
app.post('/products', function (req, res) {

    res.send(products);
    console.log("Res posted")
})

// Fetching all the items in the products - list using GET - method:
app.get('/products', (req, res) => {
    res.write(JSON.stringify(products));
    res.end();
});

// Fetching single item using the 'id' of the item with the help of GET - method:
app.get('/product/:id', function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    app.param('id', function (req, res, next, id) {
        if (id == 1) {
            res.write(JSON.stringify(products[0]));
            res.end();
        }
        else if (id == 2) {
            res.write(JSON.stringify(products[1]));
            res.end();
        }
        else if (id == 3) {
            res.write(JSON.stringify(products[2]));
            res.end();
        }res.status(200).send({
            status: true,
            message:'Get Successfully',
            data: data
        })
        else {
            res.write("Page not found");
            res.end();
        }
    })

    res.end();
    console.log("Fetched using GET method")
})

//Updating the individual item using the PUT - method:
app.put('/product/:id', (req, res) => {

    app.param('id', function (req, res, next, id) {
        console.log(id);
        
        const res = products.find((ele) => { return id == ele.id;})
        console.log(res);


        // if (products.find((ele) => { return id == ele.id;})) {
            // products[itemsFound + 1] = {
            //     "id": itemsFound + 1, "title": `T${itemsFound + 1}`, "price": "500 Rs", "category": "Grocery", "description": "The list of the items brought.", "image": `img${itemsFound + 1}`
            // };
            console.log("Updated.");
            res.send("Updated");
            res.end();
        }
        else {
            res.send("Item id does not match.");
            res.end();
        }

    });
});

app.get('/product/:id', (req, res){
    app.param('id', function(req, res ,next , id){
        products.find(id, function(err, ))
    })
});

// Deleting individual item from the list using the DELETE - method:
app.delete('/product:id', function (req, res) {

    res.send('deleted');
    console.log("Data is deleted")
})


// Listening to the server at port number - 8080:
app.listen(port, console.log(`Server is listening at port number ${port}`));


// console.log(products[2]['id']); 