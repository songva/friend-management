import User from './User'

export default class Friendship {
    //Set host and guest to private variables
    constructor(host, guest){
        if(!(host instanceof User) || !(guest instanceof User)){
            console.log('\x1b[31m', '[SYSTEM: Only be able to create friendship between 2 type:Users]', '\x1b[0m');
            return false;
        }
        let h = host;
        let g = guest;
        this.getHost = () => {
            return h;
        }
        this.getGuest = () =>{
            return g;
        }
    }
}
