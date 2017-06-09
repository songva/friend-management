import Friendship from '../model/Friendship';
import UserList from '../repository/UserTable';
import FriendList from '../repository/FriendTable';

let FriendService = {
    addFriends : (host, guest) => {
        if(!UserList.hasUser(host) || !UserList.hasUser(guest)){
            return 'One or Both of the users is/are not registered';
        }
        return FriendList.addFriends(host, guest);
    },
    getFriendsOf : (host) => {
        if(!UserList.hasUser(host)){
            return 'The users is not registered';
        }
        let friendsList = FriendList.getFriendsOf(host);
        if(friendsList.length === 0){
            return 'There is no friend connections to this user';
        }else{
            return friendsList;
        }
    },
    getCommonFriends : function(host, guest){
        if(!UserList.hasUser(host) || !UserList.hasUser(guest)){
            return 'One or Both of the users is/are not registered';
        }

        // As long as one of the two user has no friends, return with errorMsg
        let friendshipOfHost = this.getFriendsOf(host);
        let friendshipOfGuest = this.getFriendsOf(guest);
        if(!(friendshipOfHost instanceof Array) || !(friendshipOfGuest instanceof Array)){
            return 'They have no friends in common';
        }

        // Get guest's friend list first, then filter out the users who is also in the friend list of host
        let friendsOfGuest = friendshipOfGuest.map((friendshipOfGuest) => {
            return friendshipOfGuest.getGuest().getEmail();
        });
        let commonFriends = friendshipOfHost.filter((friendshipOfHost) => {
            return friendsOfGuest.indexOf(friendshipOfHost.getGuest().getEmail()) !== -1;
        });
        if(commonFriends.length === 0){
            return 'They have no friends in common';
        }else{
            return commonFriends;
        }
    }
}

export default FriendService;
