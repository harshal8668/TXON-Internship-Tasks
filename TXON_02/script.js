function display(value){
    document.getElementById("scr").value += value;
}   
function clrscr(){
    document.getElementById("scr").value ="";
}
function calculate(){
    var a = document.getElementById("scr").value;
    var b = eval(a);
    document.getElementById("scr").value = b;
}