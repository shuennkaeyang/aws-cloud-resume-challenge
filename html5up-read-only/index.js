// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch("https://gu4g7m7l3pkgyc5e74yst6plwu0ivdjn.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML =  `Views: ${data}`;
}

updateCounter();