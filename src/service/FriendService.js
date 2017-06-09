import Friendship from '../model/Friendship';
import UserList from '../repository/UserTable';
import FriendList from '../repository/FriendTable';

let FriendService = {
    addFriends : (host, guest) => {
        if(!UserList.hasUser(host) || !UserList.hasUser(guest)){
            return 'One or Both of the users is/are not registered';
        }
        return FriendList.addFriends(host, guest);
    }
}

export default FriendService;
