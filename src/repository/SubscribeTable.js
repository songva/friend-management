import Subsription from '../model/Subsription';
import User from '../model/User';


let subscriptions = [];

let SubscriptionList = {
	subscribeTo : function(target, follower){
		let existence = this.getFollowersOf(target).filter((subscribe) => {
			return subscribe.getFollower().getEmail() === follower;
		});
		if(existence.length > 0){
			return 'The requestor has already subscribed to the target';
		}else{
			subscriptions.push(new Subsription(new User(target), new User(follower)));
		}
		return '';
	},
	getFollowersOf : (user) => {
		return subscriptions.filter((subscribe) => {
			return subscribe.getTarget().getEmail() === user;
		});
	},
	emptyList : () => {
		subscriptions = [];
	}
};


export default SubscriptionList;
