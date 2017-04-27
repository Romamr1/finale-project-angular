import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routeConfig from './router.config.js';
import ListService from './services/list.services.js';
import ListCtrl from './controllers/listCtrl.js';
import CardService from './services/card.services.js';
import UserService from './services/user.services.js';
import CardCtrl from './controllers/cardCtrl.js';
import closeEditing from './directives/closeEditing.directive.js';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import LogOutCtrl from 'states/login-states/logOutCtrl.js';

angular.module('app',[	
  	'ngMaterial',
  	'ngAnimate',  	
  	uiRouter,
])
	.config(routeConfig)
	.controller('LogOutCtrl', LogOutCtrl)
	.service('ListService', ListService)
	.service('CardService', CardService)
	.service('UserService', UserService)
	.controller('ListCtrl', ListCtrl)
	.controller('CardCtrl', CardCtrl)
	.directive('closeEditing', closeEditing)
	// .run(function ($rootScope, $state){
	// 	$rootScope.$on('$stateChangeError', function(event, toState, toParams,fromState){
	// 		event.preventDefault();	// 		
	// 		$state.go('login');
	// 	})
	// })		