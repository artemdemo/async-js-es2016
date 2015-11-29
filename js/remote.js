(function(window, $){
    'use strict';

    var wsController = (function() {
        var wsUri = "ws://localhost:8080/";
        var userId = null;

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
            console.log('inMessage: ', inMessage.data);
            if (!userId) {
                var match = /userId: (\d+)/.exec(inMessage.data);
                if (match) {
                    userId = match[1];
                }
            }
        }

        /**
         * Sending message to the server
         */
        function wsSend(outMessage) {
            var message = {
                userId: userId,
                message: outMessage
            };
            websocket.send(JSON.stringify(message));
        }

        return {
            prev: function() {
                wsSend('PREV')
            },
            next: function() {
                wsSend('NEXT');
            }
        }
    })();


    $('.Remote-Left').on('click', openPrevSlide);
    $('.Remote-Right').on('click', openNextSlide);

    function openPrevSlide() {
        statusLog('PREV');
        wsController.prev();
    }

    function openNextSlide() {
        statusLog('NEXT');
        wsController.next();
    }

})(window, jQuery);