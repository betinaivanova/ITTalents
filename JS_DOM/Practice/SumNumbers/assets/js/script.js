window.onload = function() {
    var btn = document.getElementById('btn').addEventListener('click',calc,false);
    function calc() {
        var number1 = document.getElementById('num1').value;
        var number2 = document.getElementById('num2').value;
        var result = document.getElementById('sum');
        result.value = Number(number1) + Number(number2);
    }
}