(function() {
    var login = document.getElementById('loginBut');
    login.addEventListener('click',function(event) {
        var inputs = document.querySelectorAll('#loginForm > input');
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();
        
        if(userManager.loginUser(username,password)) {
            window.location.href = 'bravo.html';
        }
        event.preventDefault();
    },false);
})();