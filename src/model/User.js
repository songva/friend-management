export default class User {
    constructor(email){
        let e = email.trim();
        this.getEmail = () => {
            return e;
        }
    }
}
