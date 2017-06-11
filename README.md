# friend-management

1. As a user, I need an API to create a friend connection between two email addresses.
        
    http://friend-management.cfapps.io/friend/create
    
2. As a user, I need an API to retrieve the friends list for an email address.

    http://friend-management.cfapps.io/friend/list

3. As a user, I need an API to retrieve the common friends list between two email addresses.

    http://friend-management.cfapps.io/friend/listInCommon

4. As a user, I need an API to subscribe to updates from an email address.

    http://friend-management.cfapps.io/subscribe

5. As a user, I need an API to block updates from an email address.

    http://friend-management.cfapps.io/block

6. As a user, I need an API to retrieve all email addresses that can receive updates from an email address.

    http://friend-management.cfapps.io/publish/post
    
Import [friend-management.postman_collection.json](https://github.com/songva/friend-management/blob/master/friend-management.postman_collection.json) or [open in POSTMAN here](https://www.getpostman.com/collections/5a14338dfe94b2ff91fb) and [production.postman_environment.json](https://github.com/songva/friend-management/blob/master/production.postman_environment.json) to [Postman](https://www.getpostman.com/) to run the complete test suite.

### Code Structure
```
src
 |--+ Common 
 |  \--- ResponseTemplate.js ---- Response object 
 |--+ Controller  --------------- Express Routers
 |--+ Model  -------------------- Abstract all kinds of relationships into an object
 |--+ Repository ---------------- Datasource, date saved in static arrays, could be replaced by DB & SQL/ORM
 |--+ Service  ------------------ Business logic behaviours and validations
 \--- Server.js  ---------------- Express entrance
 
 ```
  - Relationships are abstracted into objects to keep User object clean, and make the project more extensible.
  - Use a MVC-like folder structure to make the code structure easy to understand.
  
  ### Libraries
  - Express.js   Mostly used nodejs server library
  - Body-parser  Recommanded request body parser library by Expressjs
  - Babel        Pre-compiler which supports ES5, ES6
  - Nodemon      Auto refresh server during development
 
 
 
 
 
 
 
