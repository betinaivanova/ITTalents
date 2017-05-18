window.onload = function() {
    var moreBtn = document.getElementById('more');
    moreBtn.addEventListener('click',showText,false);
   function showText() {
       var txt = document.getElementById('text');
       txt.style.display = "block";
       moreBtn.style.visibility = "hidden";
   }
}