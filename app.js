let http = require('http');

let server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (method === "POST" && url === "/message") {
        var body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const pasedBody = Buffer.concat(body).toString();
            console.log(pasedBody);
        })
        console.log(req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>ok</h1><br>');
        res.write('<h1>' + body.toString() + '</h1><br>');
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello, world!</h1><br>');
        res.write('<form method="post" action="/message">');
        res.write('<input type="text" name="name" />');
        res.write('<input type=submit name="submit" value=""/>')
        res.write('</form>');
        res.end();

    }

})

server.listen(3000);