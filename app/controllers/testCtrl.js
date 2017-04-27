function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    console.log('i3n');
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};



export default class CardCtrl{
  constructor($scope, $mdDialog){    

    $scope.showAdvanced = function(ev) {
      console.log($mdDialog);
      $mdDialog.show({
        controller: DialogController,        
        templateUrl: 'app/controllers/dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };
  }
}


