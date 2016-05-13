(function($){
    function EMV101Controller($scope, $log, $rootScope){
        $log.info('inside EMV101Controller......');
        var vm = this;
        $rootScope.tutorial = false;

    }
    angular.module('emv').controller('EMV101Controller', EMV101Controller);
})(window.jQuery);