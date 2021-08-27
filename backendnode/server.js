const http = require('http');

const hostname ='127.0.0.1'
const PORT=5000

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end('hello world');
}).listen(PORT,hostname,()=>{
    console.log(`server is running http://${hostname}:${PORT}`);
})