(function(){
    function ThankYouController($scope, $log, $rootScope){
        var vm = this;
        $rootScope.tutorial = false;
    }
    angular.module('emv').controller('ThankYouController', ThankYouController);
})();
