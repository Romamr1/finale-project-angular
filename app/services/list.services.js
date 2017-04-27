import _ from 'lodash';

export default class ListService{
	constructor () {}	
	
	getLists () {		
		return USERLISTS[this.currentUser.id - 1].lists;			
	};

	addList (listName){
		USERLISTS[this.currentUser.id - 1].lists.push({
			id: _.uniqueId('list_'),
			listName: listName
		});
	};

	removeList (list, cards) {		
		if (cards.length > 0) {
			let confirmRemove = confirm('You have cards in this list! Remove this List?');
			if (confirmRemove) {
				_.pull(USERLISTS[this.currentUser.id - 1].lists,list);
			} 
		} else {
			_.pull(USERLISTS[this.currentUser.id - 1].lists,list);
		}		
	};
}

let USERLISTS = [
	{
		userId: 1,
		lists: [
			{
				id: 1,
				listName: 'Todo'
			},
			{
				id: 2,
				listName: 'Doing'
			},
			{
				id: 3,
				listName: 'Done'
			}
		]
	},
	{
		userId: 2,
		lists: [
			{
				id: 1,
				listName: 'U2Todo'
			},
			{
				id: 2,
				listName: 'U2Doing'
			},
			{
				id: 3,
				listName: 'U2Done'
			}
		]
	},

];

