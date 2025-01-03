const metaVerse = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");
const entered = document.querySelector("h1");

enterButton.onclick = function(){
	metaVerse.style.display = "none";
	entered.style.display = "block";
}
