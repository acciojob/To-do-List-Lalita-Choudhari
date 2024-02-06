//your code here
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ol = document.querySelector("ol");

btn.addEventListener("click",function() {
   let item = document.createElement("li");
	item.innerText= inp.value;
	ol.appendChild(item);
	inp.value="";
})

