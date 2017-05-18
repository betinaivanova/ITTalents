window.onload = function() {
    var buttons = document.getElementsByClassName('button');
    for(var index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click',attachEvents,false);
    }
    function attachEvents(event) {
        var thisButton = event.target;
        thisButton.className += ' selected'
    }
}