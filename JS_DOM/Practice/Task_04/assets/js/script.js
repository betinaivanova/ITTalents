function create() {
    var arrOfArguments = Array.prototype.slice.call(arguments,0);
    var parent = document.createElement(arrOfArguments[0] + '');
    document.body.appendChild(parent);
    for(var index = 1; index < arrOfArguments.length; index++) {
        parent.appendChild(document.createElement(arrOfArguments[index]));
    }
}

