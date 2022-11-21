const http = require('node:http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

console.log(`server is running at htt[://localhost:${PORT}`)
server.listen(PORT);

