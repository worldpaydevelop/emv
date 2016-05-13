(function(){
    function ConciergeController($scope, $log, $rootScope){
        var vm = this;
        $rootScope.tutorial = false;

    }
    angular.module('emv').controller('ConciergeController', ConciergeController);
})();
