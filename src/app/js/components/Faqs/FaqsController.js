(function(){
    function FaqsController($scope, $log){
        var vm = this;
        $( "#tabs" ).tabs();
    }
    angular.module('emv').controller('FaqsController', FaqsController);
})();
