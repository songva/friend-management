import User from '../model/User';


let users = [];

users.push(new User('xi.jingping@china.com'));
users.push(new User('donald.j.trump@usa.com'));
users.push(new User('shinzo.abe@japan.com'));
users.push(new User('angela.merkel@germany.com'));
users.push(new User('theresa.may@uk.com'));
users.push(new User('hamad.bin.khalifa@qatar.com'));
users.push(new User('emmanuel.macron@france.com'));
users.push(new User('vladimir.putin@russian.com'));

let UserList = {
    hasUser : (userEmail) => {
        return users.find((user) => {
            return user.getEmail() === userEmail;
        });
    },
    getUsers : () => {
        return users;
    }
}


export default UserList;
