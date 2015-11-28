(function(window, $){
    'use strict';

    var wsController = (function() {
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

        }

        /**
         * Sending message to the server
         */
        function wsSend(outMessage) {
            websocket.send(outMessage);
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