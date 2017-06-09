import UserList from '../repository/UserTable';
import BlackList from '../repository/BlackList';

let BlockService = {
    block : (host, blocked) => {
        if(!UserList.hasUser(host) || !UserList.hasUser(blocked)){
            return 'The target or requestor is/are not registered';
        }
        return BlackList.block(host, blocked);
    }
}

export default BlockService;
