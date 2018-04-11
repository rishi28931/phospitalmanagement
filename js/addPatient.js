let get=document.getElementById("get");
let element=document.querySelector(".element");

get.style.backgroundColor="#ccc";
element.onClick(function(){
	this.style.color="#eee";
})