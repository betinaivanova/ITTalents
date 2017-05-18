// function refreshTable() {
//     //syzdavame tablicata
//     var table = document.querySelector('table > tbody');
//     table.innerHTML = '';
//     //obikalqme vsichki agneta

//     for(var index = 0; index < furna.count(); index++) {
//         var currentAgne = furna.getAgne(index);
//         var tr = document.createElement('tr');
//         var td1 = document.createElement('td');
//         var td2 = document.createElement('td');
//         td1.innerText = currentAgne.name;
//         td2.innerText = currentAgne.kg;
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         table.appendChild(tr);
//     }
// }

document.addEventListener("DOMContentLoaded", function(event) {
var xhr = new XMLHttpRequest();
xhr.open('get','http://127.0.0.1:8080/movies.json', true);
xhr.send(null);
xhr.addEventListener('load', function () {
var movies = JSON.parse(xhr.responseText);
    if ((xhr.status >= 200 && xhr.status <= 299)) {
        var table = document.querySelector('#movies-table > tbody');
       
        for(var index = 0; index < movies.length; index++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            var td6 = document.createElement('td');
            var input1 = document.createElement('input');
            var input2 = document.createElement('input');
            input1.type = 'checkbox';
            input1.id = index;
            input1.className = "see";
            input2.type = 'checkbox';
            input2.className = index;
            input2.id = 'favourite';
            td1.innerText = movies[index].Title;
            td2.innerText = movies[index].Year;
            td3.innerText = movies[index].Genre;
            td4.innerText = movies[index].Director;
            td5.innerText = "отбележи като гледан";
            td6.innerText = "отбележи като любим";
            td5.appendChild(input1);
            td6.appendChild(input2);
            table.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            var allInput = document.querySelectorAll('input[type="checkbox"]');
            for(var j = 0; j < allInput.length; j++) {
                allInput[j].addEventListener('click',function (event) {
                    if(event.target.className == 'see') {
                        moviess.addSeeMovie(movies[event.target.id].Title);
                    }
                    if(event.target.id == 'favourite') {
                        moviess.addFavouriteMovie(movies[event.target.className].Title);
                    }
                    event.stopImmediatePropagation();
                },false);
            }
        }
    }
}, false);
  
    document.getElementById('see-movies').addEventListener('click',function() {
        alert('a')
    },false)
  });
