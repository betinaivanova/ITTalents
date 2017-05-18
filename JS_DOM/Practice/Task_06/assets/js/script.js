function create() {
    var arrOfArguments = Array.prototype.slice.call(arguments,0);
    var parent = document.createElement(arrOfArguments[0] + '');
    document.body.appendChild(parent);
    for(var index = 1; index < arrOfArguments.length; index++) {
        if(Array.isArray(arrOfArguments[index])) {
            var lastChild = document.body.lastChild;
            lastChild.appendChild(document.cre)
        }
        parent.appendChild(document.createElement(arrOfArguments[index]));
    }
}

