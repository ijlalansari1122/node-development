// first node code
// modules

const fs =require("fs");
// Reading and writing from files
const textIN = fs.readFileSync('./input.txt', 'utf-8')
console.log(textIN);


const textout = 'this is what we know about avacado: '+ textIN  + ' ' +'Created on '+ Date.now();
fs.writeFileSync('./output.txt' , textout); 
 console.log('file has been written');
 