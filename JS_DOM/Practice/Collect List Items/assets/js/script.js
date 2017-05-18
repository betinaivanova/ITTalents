window.onload = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click',extractText,false);
  function extractText() {
      var items = document.querySelectorAll('#items > li');
      var res = "";
      for(var index = 0; index < items.length; index++) {
          var res = res + items[index].innerText + '\n';
          document.getElementById('result').value = res;
      }
      console.log(result);
  }
}