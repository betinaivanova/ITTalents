window.onload = function() {
    document.getElementById('but').addEventListener('click',function() {
        var xhr = new XMLHttpRequest();
        var title = document.getElementById('movie').value.trim();
        xhr.open('get','http://www.omdbapi.com/?t='+title,true);
        console.log(title);
        xhr.send(null);
        xhr.addEventListener('load',function() {
            var info = JSON.parse(xhr.responseText);
            var div = document.getElementById('result')
            div.innerHTML = '';
            var titleEl = document.createElement('h2');
            titleEl.innerText = info.Plot;
            div.appendChild(titleEl);
            var img = document.createElement('img');
            img.src = info.Poster;
            div.appendChild(img);
        },false)
    },false)
}