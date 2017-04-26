let elem = null;
export default class CardCtrl{
	constructor(CardService){
		this.isEditing = false;
	 	this.editingCard = null;

	 	this.deleteCard = function (card) {
			CardService.deleteCard(card);
		};
		
		
		this.editCard = function(card) {
			this.isEditing = true;
			this.editingCard = angular.copy(card);		
		};
		
		this.updateCard = function () {
			CardService.updateCard(this.editingCard);
			this.editingCard = null;
			this.isEditing = false;			
		};

		this.drag = function(ev) {
			concole.log(ev.target);	
			elem = ev.target;		
		};

		this.drop = function(ev) {
		  ev.preventDefault();   
		  ev.target.parentNode.insertBefore(elem, ev.target);
		}  

		this.allowDrop = function(ev) {
		  ev.preventDefault();
		} 	
 					
	}	
}