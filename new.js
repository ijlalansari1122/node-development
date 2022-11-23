// const fs =require('fs');

const http = require('http');


//creating server

const server =http.createServer((req , res)=>{

const urls= req.url;


// 
if (urls ==='/' || urls === 'home') {
    
res.end(`<h1>welcome to the landing page</h1>`)

} else if (urls === 'signin') {
  res.end('please signin first');
} else{
    res.end(':)))))) + (::::::::::::::((((')


    
}


})


// listening server on port 3000


server.listen(3000,  ()=>{

console.log("Hello server is listening on port 3000");

})