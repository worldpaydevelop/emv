(function($){
    function MainController($scope, $location, $anchorScroll, $rootScope, $uibModal){
        var vm = this;
        $rootScope.tutorial = false;
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };
        $scope.notSureOfConnection = function () {

            $uibModal.open({
                templateUrl: 'src/app/js/components/modals/not-sure-of-connection/templates/not-sure-of-connection.html',
                controller: 'NotSureOfConnectionController',
                size:'lg'
            });
        };

    }
    angular.module('emv').controller('MainController', MainController);
})(window.jQuery);