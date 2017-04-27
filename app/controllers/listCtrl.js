import DialogController from './dialogCtrl';

export default class ListCtrl{
	constructor(ListService, CardService, $mdDialog, ){
		this.removeList = function (list){
 			let cards = this.getCards(list);
 			ListService.removeList(list, cards);

 		};	
 		this.getCards = function (list) {
			return CardService.getCards(list);
		};
		
		this.createCard = function (list) {
			CardService.createCard(list, this.cardTitle);
			this.cardTitle = '';
		};

		// function setTimeCheck() {
		// 	let checkCards = CardService.getCards(ListService.getLists()[0]);
		// 	let currentDate = Date.now();
		// 		console.log('checkCards[i].title');
		// 	for (let i=0; i<checkCards.length; i++){
		// 		if (checkCards[i].finishDate <= currentDate){
		// 			alert('You have overdue card');
		// 			console.log(checkCards[i].title);
		// 		}
		// 	}
		// 	setTimeout(setTimeCheck, 30000);
		// };

		// setTimeout(setTimeCheck, 30000);

		this.showList = function(ev, list) {	      
	      ListService.currentList = list;
	      $mdDialog.show({
	        controller: DialogController,        
	        templateUrl: 'app/controllers/dialog1.tmpl.html',
	        parent: angular.element(document.body),
	        targetEvent: ev,
	        clickOutsideToClose:true,
	        fullscreen: this.customFullscreen 
	      })      
	      
	    };		
	}	
}
