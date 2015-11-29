var WebSocketServer = require('ws').Server;
var wsConnections = {};

wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    var userId = +(new Date());
    console.log('Connected; userId: %s', userId);
    wsConnections[userId] = ws;
    ws.send('userId: ' + userId);

    ws.on('message', function incoming(inMessage) {
        console.log('received: %s', inMessage);
        inMessage = JSON.parse(inMessage);
        var currentUserId = inMessage.userId;
        var message = inMessage.message;

        for (var userId in wsConnections) {
            if (wsConnections.hasOwnProperty(userId) && userId != currentUserId) {
                try {
                    wsConnections[userId].send(message);
                } catch (e) {
                    delete wsConnections[userId];
                }
            }
        }
    });
    ws.send('Connected');
});
