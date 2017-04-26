'use strict';
import ListsCtrl from 'states/home-states/home.listsCtrl.js';
import testCtrl from 'controllers/testCtrl.js';
import LoginController from 'states/login-states/login.controller.js';

export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
	'ngInject';
	$locationProvider.hashPrefix("!");
	$urlRouterProvider.otherwise('/login');
	$stateProvider		
		.state('login',{
			url: '/login',
			templateUrl: 'app/states/login-states/login.template.html',
			controller: LoginController,
			controllerAs: 'ctrl'			
		})
		.state('lists', {
			url:('/lists'),
			templateUrl: 'app/states/home-states/home.template.html',
			controller: ListsCtrl,
			controllerAs: 'ctrl',
			resolve: {
		  		currentUser: ($q, $rootScope, $state) =>{
		  			'ngInject';
		  			let deferred = $q.defer();
		  			let user = 	$rootScope.currentUser;	  			
		  			if (!user) {
		  				$state.go('login');
		  				deferred.reject();
		  			} 	else {	  			
		  				deferred.resolve();
		  			}
		  			return deferred.promise;
		  		} 
		  	}
		})
		.state('test', {
			url:('/test'),
			template: '<md-button class="md-primary md-raised" ng-click="showAdvanced($event)">Custom Dialog</md-button>',
			controller: testCtrl
		})
		
};