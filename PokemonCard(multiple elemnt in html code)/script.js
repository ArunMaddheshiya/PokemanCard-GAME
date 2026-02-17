// var h = document.querySelector("h1")
// h.innerHTML = "good bye ";

let main = document.getElementById("main")
let arr = [
    "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq12WWicwlz51-LPbvHK0aJf1eNq7NvS3kdb9OzboIHQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFY01lYYQKlZMDNxkx0AZLlchesKKdb4jYhLvDLhR8g&s"
   ];

let s = " ";
for(let i = 1 ; i <= 52; i++){
    let r = Math.floor(Math.random()*arr.length);
    s +=  `<div class="card"><img src=${arr[r]}></div>`;


}
main.innerHTML = s;




