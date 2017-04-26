
export default class CardCtrl{
  constructor($scope, $mdDialog){
    $scope.showAdvanced = function(ev) {
      console.log($mdDialog);
      $mdDialog.show({
        controller: function($scope){
          scope.answer = function(){
            console.log('Ive answered this');
          }
        },
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