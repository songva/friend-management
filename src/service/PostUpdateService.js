import UserList from '../repository/UserTable';
import SubscribeList from '../repository/SubscribeTable';
import BlackList from '../repository/BlackList';
import FriendList from '../repository/FriendTable';

let PostUpdateService = {
    publish : (sender, text) => {
        if(!UserList.hasUser(sender)){
            return 'The sender is/are not registered';
        }
        // Get all friends, followers, and users who blocked the publisher
        let friends = FriendList.getFriendsOf(sender).map((friendship) => {
                return friendship.getGuest();
            }),
            followers = SubscribeList.getFollowersOf(sender).map((subscriptions) => {
                return subscriptions.getFollower();
            }),
            blocked = BlackList.getUsersBlockedUpateFrom(sender).map((blacklist) => {
                return blacklist.getHost().getEmail();
            });
        // Get all mentioned registered users
        let emails = text.match(/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/gi);
        let mentionedList = UserList.getUsers().filter((user) => {
            return emails.indexOf(user.getEmail()) !== -1;
        })
        let candidates = friends.concat(followers, mentionedList);

        //  The recipients are friends + followers + mentioned - users who blocked the publisher
        let recipients = candidates.filter((candi) => {
            return blocked.indexOf(candi.getEmail()) === -1;
        });
        return recipients;
    }
}

export default PostUpdateService;
