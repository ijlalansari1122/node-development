// server

const fs = require('fs');
const http = require('http');
// const replace = require('replace')

// /****************SYNCHRONOUS VERSION ******************/
const data = fs.readFileSync(`./1-node-farm/starter/dev-data/data.json` , 'utf-8');
const dataobj1= JSON.parse(data);
const tempovver = fs.writeFileSync(`./1-node-farm/final/templates/template-overview.html`, 'utf-8')
const tempproduct = fs.writeFileSync(`./1-node-farm/final/templates/template-product.html`, 'utf-8')
const tempcard = fs.writeFileSync(`./1-node-farm/final/templates/template-card.html`,'utf-8' )



// ========Server==================//

const templatechange =(temp1 , product)=>{

let output = temp1.replace(/{%PRODUCTNAME%}/g , product.productName)
output.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/%{PRICE}%/g, product.price);
   
   output= output.replace(/%{FROM}%/g, product.from);
    output = output.replace(/%{NUTRIENTS}%/g, product.nutrients);
    output =  output.replace(/%{QUANTITY}%/g, product.quantity);
    output =output.replace(/%{DESCRIPTION}%/g, product.description);
    output =output.replace(/%{ID}%/g, product.id);


    if (!product.organic) output = output.replace(/%{NOT_ORGANIC}%/g, 'not-organic');
    return output;   



}












const server= http.createServer((req, res)=>{
const pathname= req.url;

if (pathname === '/' || pathname === '/overview') {
    
    res.writeHead(200, { 'Content-Type': 'text/html' })

    const cards = dataobj1.map(el => templatechange(tempcard, el)).join('');
    const output = tempovver.replace(`{%PRODUCT_CARDS%}`, cards);
    
    
    
    res.end(output);
} else if(pathname === '/product') {
    res.end("this is the product")
}
else if (pathname === '/api') {
    const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');

c



    res.writeHead(200 , {'Content-Type': 'application/json'})
    
console.log(data);
res.end(data);


}
else{

res.writeHead(404 , {
'content-type': 'text/html',
'my-own-header': 'hello-world'


})
res.end('<h1>Page not found</h1>')
}

})



server.listen(8000 , '127.0.0.1', ()=>{


console.log("app is listening on port 8000")

})