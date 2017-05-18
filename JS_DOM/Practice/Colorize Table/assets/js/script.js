window.onload = function() {
    var btn = document.getElementById('colorize').addEventListener('click',colorize,false);
    function colorize() {
       var allTr = document.querySelectorAll('table tr');
       for(var index = 0; index < allTr.length; index++) {
           if(index  % 2 != 0) {
               allTr[index].style.backgroundColor = 'red';
           }
       }
    }
}