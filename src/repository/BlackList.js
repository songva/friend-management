import Block from '../model/Block';
import User from '../model/User';


let blacklist = [];

let BlackList = {
    block : function(host, blocked){
        let existence = this.getBlacklistOf(host).filter((block) => {
                            return block.getBlocked().getEmail() === blocked;
                        });
        if(existence.length > 0){
            return 'The target has already been blacklisted by the requestor';
        }else{
            blacklist.push(new Block(new User(host), new User(blocked)));
        }
        return '';
    },
    getBlacklistOf : (user) => {
        return blacklist.filter((block) => {
            return block.getHost().getEmail() === user;
        });
    },
}


export default BlackList;
