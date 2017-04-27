export default class LogOutController{
	constructor ($rootScope, $state, ListService, CardService, UserService) {		
		this.logOut = function () {
			$rootScope.currentUser = null;
			ListService.currentUser = null;
			CardService.currentUser = null;
			UserService.urrentUser = null;
			$state.go('login');
		};
	
	};
};