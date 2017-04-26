import _ from 'lodash';

export default class ListService{
	constructor () {}
	
	getLists () {
		return lists;
	};

	addList (listName){
		lists.push({
			id: _.uniqueId('list_'),
			listName: listName
		});
	};

	removeList (list) {
		_.pull(lists,list);
	};
}

let lists = [
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
	];