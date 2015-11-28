(function(window, $, Reveal){
    'use strict';

    var wsUri = "ws://localhost:8080/";

    var websocket = new WebSocket(wsUri);
    websocket.onopen = wsOpen;
    websocket.onclose = wsClose;
    websocket.onmessage = wsMessage;
    websocket.onerror = wsError;

    function wsOpen() {
        statusLog('CONNECTED');
    }

    function wsClose() {
        statusLog('DISCONNECTED');
    }

    function wsError() {
        statusLog('ERROR');
    }

    /**
     * Processes incomming message from the server
     */
    function wsMessage(inMessage) {
    	switch (inMessage) {
    		case 'PREV':
    			statusLog('PREV');
    			Reveal.prev();
    			break;
    		case 'NEXT':
    			statusLog('NEXT');
    			Reveal.next();
    			break;
    	}
    }

})(window, jQuery, Reveal);