import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import products from "./client/data/products.js";

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'}
    ];
    res.json(customers);
});

app.get('/api/trending', (req, res) => {
    const trending = [];
    for(var i =0; i <= products.length; i++){
        if(i >= 5){
            break;
        }
        trending.push(products[i]);
    }
    res.json(trending);
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  