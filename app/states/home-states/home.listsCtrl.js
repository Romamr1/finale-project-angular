export default class ListsCtrl{
	constructor(ListService){
		this.lists = ListService.getLists();
		this.addList = function () {
			ListService.addList(this.listName); 		
			this.listName = '';
		};		
	}	
}
