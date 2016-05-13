(function(){
    function OrderController($scope, $log, $rootScope){
        var vm = this;
        $rootScope.tutorial = false;
    }
    angular.module('emv').controller('OrderController', OrderController);
})();