const quote = document.getElementById("quote");
const author = document.getElementById("author");
const category = document.getElementById("category");
const loading = document.querySelector("#loading");
const nextBtn = document.getElementById("nextBtn");

const apiKey = "gFN6HJy9Tsj9SXzVf6txrIZ2YAe8N8hNdRC9PykI";
const url = "https://api.api-ninjas.com/v1/quotes?category=";
const options = {
  headers: { "X-Api-Key": apiKey },
};

async function getQuote() {
  quote.innerHTML = `<img src="amalie-steiness.gif" alt="" class="gif d-flex">`;
  author.innerHTML = `-------`;
  category.innerHTML = `-------`;

  const data = await fetch(url, options);
  const result = await data.json();
  //   console.log(result[0]);

  quote.innerHTML = `<i class="fa-sharp fa-solid fa-quote-left"></i> ${result[0].quote}  <i class="fa-sharp fa-solid fa-quote-right"></i>`;
  author.innerHTML = `" ${result[0].author} "`;
  category.innerHTML = `" ${result[0].category} "`;
}

// Events On button and onload
nextBtn.addEventListener("click", getQuote);
window.onload = () => {
  getQuote();
};
