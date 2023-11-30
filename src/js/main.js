import "./../scss/style.scss";
import { Movies } from "./Movies";

const app = document.getElementById("app");

fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=6ffecd8b&s=guardians")
  .then((response) => response.json())
  .then((products) => {
    const movies = products.Search;
    const m2 = movies.map((movie) => {
      return new Movies(movie.Title, movie.Year, movie.Poster);
    });
    showMovies(m2);
  });


function showMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    const div = document.createElement("div");
    div.className = "movie";
    const h2 = document.createElement("h2");
    h2.innerHTML = movies[i].title;

    const h3 = document.createElement("h3");
    h3.innerHTML = movies[i].year;

    const img = document.createElement("img");
    img.src = movies[i].poster;

    app.appendChild(div)
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h3);
    
  
  }
}
 /* fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
 .then((response) => response.json())
 .then((products) =>{
  const movies = products.map((movie) => {
    return new Movies(movie.name, movie.year, movie.imageUrl)
  })
  console.log(products);
  console.log(movies);
  createHtml(movies);
 });


function createHtml (movies){
  for (let i = 0; i < movies.length; i++) {
    const div = document.createElement("div");
    div.className = "movie";
    const h3 = document.createElement("h3");
    h3.innerHTML = movies[i].title;

    const p = document.createElement("p");
    p.innerHTML = movies[i].year;

    const img = document.createElement("img");
    img.src = movies[i].poster;

    app.appendChild(div)
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    
  
  }
} */