import UserList from '../repository/UserTable';
import FriendList from '../repository/FriendTable';
import BlackList from '../repository/BlackList';

let isMutualBlocked = (host, guest) => {
	// Users got blocked by host
	let blocked = BlackList.getBlacklistOf(host).map((blocked) => {
		return blocked.getBlocked();
	});
	// Users who blocked the host
	let userBlockedUpdates = BlackList.getUsersBlockedUpateFrom(host).map((meaner) => {
		return meaner.getHost();
	});
	// Check if the guest is one of those two kinds of users
	let isBlocked = blocked.concat(userBlockedUpdates).filter((stranger) => {
		return stranger.getEmail() === guest;
	});
	return isBlocked.length > 0;
};

let FriendService = {
	addFriends : (host, guest) => {
		if(!UserList.hasUser(host) || !UserList.hasUser(guest)){
			return 'One or Both of the users is/are not registered';
		}
		if(isMutualBlocked(host, guest)){
			return 'One of the users has blackedlisted the other';
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
};

export default FriendService;
