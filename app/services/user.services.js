import _ from 'lodash';

export default class UserService{
	constructor () {}

	getUsers () {
		return USERS;
	};
	
}

let USERS = [
	{
		id: 1,
		name: 'user',
		password: 'user'
	},
	{
		id: 2,
		name: 'vasia',
		password: 'vasia'
	},
	{
		id: 3,
		name: 'petia',
		password: 'petia'
	}
];