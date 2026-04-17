
const http = require ("http") 
const { resolve } = require("path/posix")

const server = http.createServer((request,Response) =>{
    Response.end("It Work");
 })

 server.listen(3000);