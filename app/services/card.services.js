import _ from 'lodash';
import angular from 'angular';

export default class CardService{
	constructor () {}	

	// checkfunction () {
	// 	let checkCards = USERCARDS[this.currentUser.id - 1].cards;
	// 	currentDate = Date.now();
	// 	for (let i=0; i<checkCards.length; i++){
	// 		if (checkCards[i].finishDate >= currentDate){
	// 			alert('You have overdue card');
	// 		}
	// 	}
		
	// }
	

	getCards (list) {				
		return _.filter(USERCARDS[this.currentUser.id - 1].cards, {list_id:list.id});		
	};

	createCard (list, cardTitle) {
		USERCARDS[this.currentUser.id - 1].cards.push({
			id: _.uniqueId('card_'),
			title: cardTitle,
			list_id: list.id
		});
	};
	
	deleteCard (card) {
		return _.pull(USERCARDS[this.currentUser.id - 1].cards,card);
	};
	
	updateCard (updatingCard) {
		var card = _.findWhere(USERCARDS[this.currentUser.id - 1].cards, { id: updatingCard.id });
		card.title = updatingCard.title;
		card.description = updatingCard.description;
		card.finishDate = updatingCard.finishDate;
		card.list_id = updatingCard.list_id;
	};

}


let USERCARDS = [
	{
		userId: 1,
		cards: [
			{
				id: 1,
				title: 'Fix bug in player',
				description: 'Some Descriptionfor fix bug',
				priority: 2,
				finishDate: new Date(2017,4,28),
				list_id: 1
			},
			{
				id: 2,
				title: 'Add feature with D3',
				description: 'Some Descriptionfor D3',
				priority: 1,
				finishDate: new Date(2017,4,30),
				list_id: 2
			},
			{
				id: 3,
				title: 'Learn AngularJS',
				description: 'Some Descriptionfor D3',
				finishDate: new Date(2017,4,29),
				priority: 2,
				list_id: 3
			}			
		]
	},
	{
		userId: 2,
		cards: [
			{
				id: 1,
				title: 'U2 Fix bug in player',
				description: 'Some Descriptionfor fix bug',
				finishDate: new Date(2017,4,28),
				priority: 2,
				list_id: 1
			},
			{
				id: 2,
				title: 'U2 Add feature with D3',
				description: 'Some Descriptionfor D3',
				finishDate: new Date(2017,4,28),
				priority: 1,
				list_id: 2
			},
			{
				id: 3,
				title: 'U2 Learn AngularJS',
				description: 'Some Descriptionfor D3',
				finishDate: new Date(2017,4,29),
				priority: 2,
				list_id: 3
			}	
		]
	},

];