import _ from 'lodash';

export default class CardService{
	constructor () {}

	getCards (list) {
		return _.filter(cards, {list_id:list.id});
	};

	createCard (list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
		});
	};
	
	deleteCard (card) {
		return _.pull(cards,card);
	};
	
	updateCard (updatingCard) {
		var card = _.findWhere(cards, { id: updatingCard.id });
		card.description = updatingCard.description;
		card.list_id = updatingCard.list_id;
	};

}

let cards = [
	{
		id: 1,
		description: 'Fix bug in player',
		list_id: 1
	},
	{
		id: 2,
		description: 'Add feature with D3',
		list_id: 2
	},
	{
		id: 3,
		description: 'Learn AngularJS',
		list_id: 3
	}
	
	];