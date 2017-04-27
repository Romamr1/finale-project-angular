'use strict';

export default class LoginController{
	constructor($rootScope, UserService, $state, ListService, CardService){				
		this.user = {};	
		this.users = UserService.getUsers();		
		this.submit = () => {	
			for (let i=0; i<this.users.length;i++){				
				if((this.users[i].name === this.user.name) && (this.users[i].password === this.user.password)) {					
					$rootScope.currentUser = this.users[i];
					ListService.currentUser = this.users[i];
					CardService.currentUser = this.users[i];
					UserService.urrentUser = this.users[i];
					$state.go('lists');
				}
			}
			this.user.name = '';
			this.user.password = '';
		}	
	}

	
}