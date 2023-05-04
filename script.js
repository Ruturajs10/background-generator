var a =document.querySelector(".color1")
var b =document.querySelector(".color2")
var body =document.getElementById("gradient")

a.addEventListener("input",function(){
  body.style.background = 
	"linear-gradient(to right, " 
	+ a.value 
	+ ", " 
	+ b.value 
	+ ")";
})

b.addEventListener("input",function(){
	
  body.style.background="linear-gradient(to right,"+ a.value+" , "+b.value+")";
})