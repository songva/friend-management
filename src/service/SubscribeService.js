import UserList from '../repository/UserTable';
import SubscribeList from '../repository/SubscribeTable';

let SubscribeService = {
    subscribe : (target, follower) => {
        if(!UserList.hasUser(target) || !UserList.hasUser(follower)){
            return 'The target or requestor is/are not registered';
        }
        return SubscribeList.subscribeTo(target, follower);
    }
}

export default SubscribeService;
