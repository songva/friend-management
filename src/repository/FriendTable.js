import Friendship from '../model/Friendship';
import User from '../model/User';

// Friendship Table
let friends = [];

let FriendList = {
    /**
     *  Get friends of host, return error code if the guest is included in the friends list of host
     *  Unable to use lamdba exp due to the sibling function calls getFriendsOf
     */
    addFriends : function(host, guest){
        let existence = this.getFriendsOf(host).filter((friendship) => {
                            return friendship.getGuest().getEmail() === guest;
                        });
        if(existence.length > 0){
            return 'Their friendship has already been built up';
        }else{
            // Add two-way relationship to make search easier
            friends.push(new Friendship(new User(host), new User(guest)));
            friends.push(new Friendship(new User(guest), new User(host)));
        }
        return '';
    },
    getFriendsOf : (user) => {
        return friends.filter((friendship) => {
            return friendship.getHost().getEmail() === user;
        });
    },
    emptyList : () => {
        friends = [];
    }
}


export default FriendList;
