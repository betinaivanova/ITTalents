function User(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
}
var userManager = (function() {
    var users = [];
    users.push(new User('Pani', '1234',30));
    console.log(users);
    return {
        addUser: function(user) {
            if(user instanceof User) {
                users.push(user);
            }
        },
        loginUser: function(username,password) {
            return (users.some(function(u) {
                return (u.username === username) &&
                       (u.password === password);
            }))
        }
    }
})();