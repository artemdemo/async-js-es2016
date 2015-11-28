(function(window, $){
    'use strict';

    window.statusLog = (function(){
        /**
         * Logging status + providing animation
         * @param status {string}
         */
        function statusLog(status) {
            console.log('statusLog', status);
            switch (status) {
                case 'CONNECTED':
                case 'DISCONNECTED':
                case 'ERROR':
                break;  
            }
        }

        return statusLog;
    })();

})(window, jQuery);