let my_var = 100;

var my_other_var = "hello world";
const constant_var = "constant";
console.log(my_other_var);
my_other_var += "!";
// alert(my_other_var);

// how to interact with the DOM
console.log(document.getElementById("my_head"));

document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked on the h1");
    document.getElementById("paragraph").innerHTML = "this is the new text";
    document.getElementById("paragraph").style.color = "blue";
})
console.log(document.getElementById("my_head").innerHTML);

// dblclick, mouseleave, mouseover, mousemove