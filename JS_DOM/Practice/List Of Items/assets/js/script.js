window.onload = function() {
    var btn = document.getElementById('add-item');
    btn.addEventListener('click',addItem,false);
    function addItem() {
        var inputField = document.getElementById('new-item-text').value;
        var items = document.getElementById('items');
        var li = document.createElement('li');
        li.innerText = inputField;
        items.appendChild(li);
        document.getElementById('new-item-text').value = "";
    }
}