(function(){
    function ContactController($scope, $log, $rootScope){
        var vm = this;
        $rootScope.tutorial = false;
    }
    angular.module('emv').controller('ContactController', ContactController);
})();
