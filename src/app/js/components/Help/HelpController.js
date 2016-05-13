(function(){
    function HelpController($scope, $log, $rootScope){
        var vm = this;
        $rootScope.tutorial = false;

    }
    angular.module('emv').controller('HelpController', HelpController);
})();
