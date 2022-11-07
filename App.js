const fs = require('fs');
const http = require('http');


// synchronous version

const data = fs.readFileSync(`./data1.json`, 'utf-8')
const dataobj = JSON.parse(data);
const Tempoverview = fs.readFileSync(`./1-node-farm/final/templates/template-overview.html`, 'utf-8')


const Tempcard = fs.readFileSync(`./1-node-farm/final/templates/template-card.html`, 'utf-8')
const TempProduct = fs.readFileSync(`./1-node-farm/final/templates/template-product.html` , 'utf-8')


// ----------------server--------------

const replacetemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/%{IMAGE}%/g, product.image);
    output = output.replace(/%{PRICE}%/g, product.price);
    output = output.replace(/%{FROM}%/g, product.from);
    output = output.replace(/%{NUTRIENTS}%/g, product.nutrients);
    output = output.replace(/%{QUANTITY}%/g, product.quantity);
    output = output.replace(/%{DESCRIPTION}%/g, product.description);
    output = output.replace(/%{ID}%/g, product.id);
 
    
    if (!product.organic)  output= output.replace(/%{NOT_ORGANIC}%/g, 'not-organic')  ;  
    return output;   


}














const server = http.createServer((req, res) => {
   
    const pathurl = req.url;
    // OVERVIEW 
    if (pathurl === '/' || pathurl === '/overview') {

        res.writeHead(500, { 'Content-type': 'text/html' })
        const cardhtml = dataobj.map(el => replacetemplate(Tempcard, el));
        const output = Tempoverview.replace(`{%PRODUCT_CARDS%}`, cardhtml)
        

        



        res.end(output)
    }

    else if (pathurl === '/product') {
        res.end( 'output');


    }

    else if (pathurl === '/api') {
        res.writeHead(500, { 'Content-type': 'application/json' })
        res.end(data);


    }

    else {
        res.end("<h1>page not found</h1>")

    }


})


server.listen(3000, '127.0.0.1', () => {

    console.log("app is listening on port 3000");


})