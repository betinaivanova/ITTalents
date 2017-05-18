window.onload = function() {
    var btn = document.getElementById('btn-delete').addEventListener('click',deleteByEmail,false);
    var inputEmail = document.getElementById('email');
    var emailTd = document.querySelectorAll('#customers tr td:nth-child(2)');
    var isEqual = false;
    function deleteByEmail() {
        for(var index = 0; index < emailTd.length; index++) {
            if(emailTd[index].innerText == inputEmail.value) {
                isEqual = true;
                var removeEmail = emailTd[index].parentNode;  
            }
        }
        if(isEqual) {
            removeEmail.parentNode.removeChild(removeEmail);
            document.getElementById('result').innerText = 'Deleted';
            inputEmail.value = "";
        } else {
            document.getElementById('result').innerText = 'Not Found';
            inputEmail.value = "";
        }
    }
}
