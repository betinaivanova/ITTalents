var userManager = (function() {
    function User(email,password) {
        this.email = email;
        this.password = password;
    }

    function FavouriteMovie(title) {
        this.title = title;
    }

    // var users = [];
    var users = JSON.parse(window.localStorage.getItem('users')) || [];
 

    var userManager = {};
    return {
        createUser : function(email,password) {
            return new User(email,password);
        },
        createFavouriteMovie : function(title) {
            return new FavouriteMovie(title);
        },
        addFavouriteMovie : function(title) {
            users.push(this.createFavouriteMovie(title));
            window.localStorage.setItem('users', JSON.stringify(users));
        },

        addUser : function(email,password) {
            users.push(this.createUser(email,password));
            window.localStorage.setItem('users', JSON.stringify(users));
        },

        getUser : function(index) {
            if(index >= 0 && index <= users.length) {
                return users[index];
            }
        },

        countUser : function() {
            return users.length;
        },

        isValidEmail : function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        },

        isValidPassword : function(password) {
            return password.length > 4;
        },

        isUserEmailExists: function (email) {
            return users.some(function (u) {
                return (u.email === email);
            });
        },

        loginUser: function (email, password) {
            return users.some(function (u) {
                return (u.email === email) &&
                    (u.password === password);
            });
        },


    }
})();