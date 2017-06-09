import User from '../model/User';


let users = [];

users.push(new User('xi.jingping@china.com'));
users.push(new User('donald.j.trump@usa.com'));
users.push(new User('shinzo.abe@japan.com'));


let UserList = {
    hasUser : (userEmail) => {
        return users.find((user) => {
            return user.getEmail() === userEmail;
        });
    }
}


export default UserList;
