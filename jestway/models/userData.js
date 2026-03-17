const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    // Remove one user
    removeOneUser() {
        if (this.users.length > 0) {
            this.n = this.n - 1;
            return this.users.pop();
        } else {
            return null;
        }
    }

    // Remove two users
    removeTwoUser() {
        this.removeOneUser();
        this.removeOneUser();
    }

    // Get user count
    getUserCount() {
        return this.users.length;
    }

    // Clear all users
    clearUsers() {
        this.users = [];
        this.n = 0; // (แนะนำให้ reset ด้วย)
    }
}

module.exports = UserData;