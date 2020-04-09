var num = 6;
var color=genrandom(num);
var h1= document.querySelector("h1");
var choosen=pick();
var rgbdisp= document.querySelector("#rgbdisp");
var squares = document.querySelectorAll("#square");
var colorDisplay= document.getElementById("colordisp");
rgbdisp.textContent=choosen;
var newgame = document.querySelector("#newgame");
var messagedisp=document.querySelector("#message");
var easyPlay = document.querySelector("#easy");
var hardPlay = document.querySelector("#hard")
for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];

squares[i].addEventListener("click",function(){
	var selected=this.style.backgroundColor;	

	if(selected===choosen){
messagedisp.textContent="YOU WON";
newgame.textContent="PLAY AGAIN";
h1.style.background=choosen;
for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=choosen;
	}}
	else{
		this.style.backgroundColor="#232323";
		messagedisp.textContent="TRY AGAIN";
	}
})
}
function pick(){
var random = Math.floor(Math.random()*color.length);
return color[random];
}


function genrandom(number){
	var arr=[];
	for (var i=0;i<number;i++){

	arr.push(randomcolor());
	}
	return arr;

}
function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";


}
newgame.addEventListener("click",function(){
 color=genrandom(num);
choosen=pick();
rgbdisp.textContent=choosen;
h1.style.background= "linear-gradient(#ff0000, #CCffCC)";

messagedisp.textContent="";
for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];

}

})

easyPlay.addEventListener("click",function(){
hardPlay.classList.remove("selector");
easyPlay.classList.add("selector");
num=3;
 color=genrandom(num);
choosen=pick();
rgbdisp.textContent=choosen;
h1.style.background= "linear-gradient(#ff0000, #CCffCC)";
for(i=0;i<squares.length;i++){
	if(color[i]){
	squares[i].style.backgroundColor=color[i];
}
else{
	squares[i].style.display="none";
}

}


})
hardPlay.addEventListener("click",function(){
easyPlay.classList.remove("selector");
hardPlay.classList.add("selector");
num=6;
color=genrandom(num);
choosen=pick();
rgbdisp.textContent=choosen;
h1.style.background= "linear-gradient(#ff0000, #CCffCC)";
for(i=0;i<squares.length;i++){
	
	squares[i].style.backgroundColor=color[i];
      squares[i].style.display="block";


}

})
