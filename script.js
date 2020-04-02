var cols = ['#42ddf5', '#42f557', '#f5f242', '#f5a142', '#f54242', '#42f5d1', '#42c5f5', '#4251f5', '#bc42f5', '#f54281', '#f54242'];



var press = document.querySelector("button");
var body = document.querySelector("body");

function changeBg() {
	var randCol = cols[Math.floor(Math.random() * cols.length)];
	body.style.background = randCol
};




press.addEventListener("click", changeBg);
