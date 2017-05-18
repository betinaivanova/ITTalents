window.onload = function() {
    document.getElementById('button-search').addEventListener('click',search,false);
    var inputSearch = document.getElementById('search-text');
    function search() {
        var inputArr = inputSearch.value.split("");
        var towns = document.querySelectorAll('#towns > li');
        var newArr = [];
        for(var index = 0; index < towns.length; index++) {
           newArr.push(towns[index].innerText.split(""));
        }
        console.log(newArr);
    }
}