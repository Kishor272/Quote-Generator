const display = document.getElementById("display");
const button = document.getElementById("btn");

let URL = "https://api.quotable.io/quotes/random";

async function fetchQuote() {
  let response = await fetch(URL);
  let data = await response.json();
  let quotes = data[length].content;
  display.innerText = quotes;
}

button.addEventListener("click", fetchQuote);
