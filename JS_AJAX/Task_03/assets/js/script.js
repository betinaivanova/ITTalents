window.onload = function() {
    var select = document.getElementById('cities');
    function createElement(text) {
        var div = document.getElementById('result');
        var paragraph = document.createElement('p');
        paragraph.innerText = text;
        div.appendChild(paragraph);
    }
    select.addEventListener('change',function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://api.openweathermap.org/data/2.5/weather?q=' + select.value + ',bg&appid=f631fd357c75163a46154773a513dd64&lang=bg',true);
        xhr.send(null);
        xhr.addEventListener('load',function() {
            console.log(xhr.responseText);
            var res = JSON.parse(xhr.responseText);
            var div = document.getElementById('result');
            div.innerHTML = "";
            createElement(Math.floor(res.main.temp - 273.15));
            createElement(res.weather[0].description);
            createElement(Math.floor(res.wind.speed - 273.15));
             var img = document.createElement('img');
            console.log(res.weather[0].icon);
            img.src = "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
            div.appendChild(img);
           
        })
    },false)
    // document.getElementById('but').addEventListener('click',function() {
   
    // },false)
}