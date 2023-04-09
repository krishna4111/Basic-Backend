const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    const body=[];
   // console.log('start')

    if(url==='/'){
        fs.readFile("message.txt",{encoding: "utf-8"} , (err,data)=>{
            if(err){
                console.log(err);
            }
            
       
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
       res.write(`<body>${data}</body>`);
        res.write(`<body><form action="/message" method="Post"><input type="text" name="message"><button type="submit">send</button></form></body>`)
        res.write('</html>')
        return res.end();
        
    });
    }
    else if(url==='/message' && method==='POST'){
       
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);  
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            //parsedbody op is like "message=how are you" for splitimh only the coming data use the line below
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt', message ,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            })
           
        })
       
       
    }
    else{res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Hello How are you</h1></body>')
    res.write('</html>');
    res.end();}
    
    
   
})
server.listen(3000);
