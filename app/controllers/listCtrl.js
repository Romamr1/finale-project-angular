export default class ListCtrl{
	constructor(ListService, CardService){
		this.removeList = function (list){
 			ListService.removeList(list);
 		};	
 		this.getCards = function (list) {
			return CardService.getCards(list);
		};
		
		this.createCard = function (list) {
			CardService.createCard(list, this.cardDescription);
			this.cardDescription = '';
		};		
	}	
}
