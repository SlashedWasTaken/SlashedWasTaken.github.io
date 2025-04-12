const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let count = 0;

wss.on('connection', (ws) => {
  count++;
  broadcast();

  ws.on('close', () => {
    count--;
    broadcast();
  });
});

function broadcast() {
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(count.toString());
    }
  }
}

server.listen(process.env.PORT || 10000, () => {
  console.log('Server running...');
});