import FriendList from '../repository/FriendTable';
import BlackList from '../repository/BlackList';
import SubscribeList from '../repository/SubscribeTable';
import UserList from '../repository/UserTable';

let UtilService = {
    emptyAllRelations : () => {
        FriendList.emptyList();
        BlackList.emptyList();
        SubscribeList.emptyList();
    },
    getAllUsers : () => {
        return UserList.getUsers();
    }
}

export default UtilService;
