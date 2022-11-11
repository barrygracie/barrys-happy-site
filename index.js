
//joke
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}

//kanye quote
const button2 = document.querySelector(".container2 button");
const quoteDiv = document.querySelector(".container2 .quote p");

document.addEventListener("DOMContentLoaded", getQuote);

button2.addEventListener("click", getQuote);

async function getQuote() {
  const quoteData = await fetch("https://api.kanye.rest", {
    headers: {
      Accept: "application/json"
    }
  });
  const quoteObj = await quoteData.json();
  quoteDiv.innerHTML = quoteObj.quote;
  console.log(quoteData);
}

//cat button
let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-pic')

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<img src="${cat.url}" alt="kitty" />`
        });
    })
})

//functions
function loadGame(){
    var gameDiv = document.getElementById("game");
    gameDiv.style.width = "600px";
    gameDiv.style.height = "600px";
    gameDiv.style.alignContent = "center";
    gameDiv.style.textAlign = "center";
    gameDiv.innerHTML = `<iframe width="100%" height="100%" src="https://play.idevgames.co.uk/embed/galactic-wars" scrolling="no" style="border:none"</iframe>`
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}

//Styling

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.padding = '5px';
    button.style.margin = '3px';
    button.style.fontSize = '1em';
    button.style.fontFamily = 'verdana';
    button.style.border = 'none';
    button.style.borderRadius = '10px';
    button.style.background = '#343A40';
    button.style.color = 'white';
    button.onmouseover = () => {button.style.color = 'red'}
    button.onmouseout = () => {button.style.color = 'white'}
})

let headings = document.querySelectorAll('h1');
headings.forEach(h1 => {
    h1.style.fontFamily = 'verdana';
    h1.style.color = '#E9ECEF';
    h1.style.background = '#212529';
    h1.style.textAlign = 'center';
})

let headings2 = document.querySelectorAll('h2');
headings2.forEach(h2 => {
    h2.style.fontFamily = 'verdana';
    h2.style.color = '#212529';
    h2.style.background = '#E9ECEF';
    h2.style.textAlign = 'center';
})

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.fontFamily = 'verdana';
    p.style.color = '#212529';
    p.style.background = '#E9ECEF';
})

document.body.style.background = '#DEE2E6';

let c = document.getElementById("center");
c.style.display = "block";
c.style.margin = "0 auto";