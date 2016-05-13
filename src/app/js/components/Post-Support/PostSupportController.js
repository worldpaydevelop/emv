(function($){
    function PostSupportController($scope, $log, $rootScope){
        $log.info('inside PostSupportController......');
        var vm = this;
        $rootScope.tutorial = false;

    }
    angular.module('emv').controller('PostSupportController', PostSupportController);
})(window.jQuery);