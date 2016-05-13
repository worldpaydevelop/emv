(function($){
    function NotSureOfConnectionController($scope, $log,$uibModalInstance){
        $log.info('inside NotSureOfConnectionController......');
        var vm = this;
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
    angular.module('emv').controller('NotSureOfConnectionController', NotSureOfConnectionController);
})(window.jQuery);