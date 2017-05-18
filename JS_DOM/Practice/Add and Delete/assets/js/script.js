window.onload = function() {
    var btn = document.getElementById('add-item');
    btn.addEventListener('click',addItem,false);
    function addItem() {
        var inputField = document.getElementById('new-item-text').value;
        var items = document.getElementById('items');
        var li = document.createElement('li');
        li.innerText = inputField;
        items.appendChild(li);
        var anchor = document.createElement('a');
        anchor.href="#";
        anchor.innerText = "[Delete]";
        anchor.addEventListener('click',deleteItem,false);
        li.appendChild(anchor);
        document.getElementById('new-item-text').value = "";
    }
    var a = document.querySelectorAll('#items > li > a');
    for(var index = 0; index < a.length; index++) {
        a[index].addEventListener('click',deleteItem,false);
    }
    function deleteItem(event) {
        var li = event.target.parentNode;
        event.target.parentNode.parentNode.removeChild(li);
    }
}