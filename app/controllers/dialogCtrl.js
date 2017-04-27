export default class DialogController{
	constructor ($scope, $mdDialog, ListService, CardService) {

		$scope.list = ListService.currentList;

		$scope.lists = ListService.getLists();

		$scope.getCards = function (list) {
			return CardService.getCards(list);
		};
		
		$scope.createCard = function (list) {
			CardService.createCard(list, $scope.cardTitle);
			$scope.cardTitle = '';
		};

		$scope.hide = function() {
		$mdDialog.hide();
		};

		$scope.cancel = function() {		
		$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
		$mdDialog.hide(answer);
		};
	};
};