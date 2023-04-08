const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('krishna');
    const name='my name is krishna';
    res.end(name);
})
server.listen(4000);