var WebSocketServer = require('ws').Server;
var wsConnections = {};

wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
	var userID = parseInt(ws.upgradeReq.url.substr(1), 10);
	wsConnections[userID] = ws;

	// If you need to send message to specific users see here: http://stackoverflow.com/questions/16280747/sending-message-to-a-specific-connected-users-using-websocket
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
        for (var userID in wsConnections) {

        }
    });
    ws.send('Connected');
});
