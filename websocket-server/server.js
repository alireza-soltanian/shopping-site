// server.js
const http = require('http');
const WebSocketServer = require('ws').Server;

const server = http.createServer((req, res) => {
    res.writeHead(404);
    res.end();
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('A new client connected');

    ws.on('message', (message) => {
        console.log('Received: %s', message);
        // ارسال پاسخ به کلاینت
        ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('WebSocket server is listening on port 8080');
});
