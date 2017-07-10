import User from './User';

export default class Subsription {
	constructor(target, follower){
		if(!(target instanceof User) || !(follower instanceof User)){
			// console.log('\x1b[31m', '[SYSTEM: Only type:User is able to subscribe to another type:Users]', '\x1b[0m');
			return false;
		}
		let t = target;
		let f = follower;
		this.getTarget = () => {
			return t;
		};
		this.getFollower = () =>{
			return f;
		};
	}
}
