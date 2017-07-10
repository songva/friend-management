import User from './User';

export default class Block {
	constructor(host, blocked){
		if(!(host instanceof User) || !(blocked instanceof User)){
			// console.log('\x1b[31m', '[SYSTEM: Only type:User is able to blacklist another type:Users]', '\x1b[0m');
			return false;
		}
		let t = host;
		let f = blocked;
		this.getHost = () => {
			return t;
		};
		this.getBlocked = () =>{
			return f;
		};
	}
}
