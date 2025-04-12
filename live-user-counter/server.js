const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

let clients = new Set();

wss.on('connection', function connection(ws) {
  clients.add(ws);
  broadcastUserCount();

  ws.on('close', () => {
    clients.delete(ws);
    broadcastUserCount();
  });
});

function broadcastUserCount() {
  const count = clients.size;
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(count.toString());
    }
  }
}
