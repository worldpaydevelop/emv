(function($){
    function NotSureOfConnectionController($scope, $log,$uibModalInstance, $rootScope){
        $log.info('inside NotSureOfConnectionController......');
        var vm = this;
        $rootScope.tutorial = false;
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
    angular.module('emv').controller('NotSureOfConnectionController', NotSureOfConnectionController);
})(window.jQuery);