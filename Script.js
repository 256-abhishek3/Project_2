var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
cel.addEventListener('input', function(){
    var c = this.value;
    var f = (c * 9/5) + 32;

    fah.value=f;
})
fah.addEventListener('input', function(){
    var f = this.value;
    var c = (f - 32) * 5/9;
    
    cel.value=c;
})