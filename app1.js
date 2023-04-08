const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>home page</title></head>');
        res.write('<body>Welcome Home</body>')
        res.write('</html>');
        return res.end;
    }
    else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>about us</title></head>');
        res.write('<body>Welcome To About Us Page</body>')
        res.write('</html>');
        return res.end;
    }
    else if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>project page</title></head>');
        res.write('<body>Welcome To My Nodejs Project</body>')
        res.write('</html>');
        return res.end;
    }
})
server.listen(3000);