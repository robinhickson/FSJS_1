/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
 ***/

quotes = [
  {
    quote: `Do you think the universe fights for souls to be together? Some things are too strange and strong to be coincidences.`,
    source: `Emery Allen`,
    citation: `Become`,
    year: 2014,
    genre: `Poetry`,
  },
  {
    quote: `“A trophy carries dust. Memories last forever.`,
    source: `Mary Lou Retton`,
    genre: `Sports`,
  },
  {
    quote: `The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.`,
    source: `Isaac Asimov`,
    citation: `Book of Science and Nature Quotations`,
    year: 1988,
    genre: `Science`,
  },
  {
    quote: `The greatest lesson in life is to know that even fools are right sometimes.`,
    source: `Horace`,
    year: 600,
    genre: `Philosophy`,
  },
  {
    quote: `The English never draw a line without blurring it.`,
    source: `Winston Churchill`,
    citation: `Europe Unite: Speeches`,
    year: 1948,
    genre: `Politics`,
  },
];


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
return randomQuote;
}




/***
 * `printQuote` function
 ***/
function printQuote(){
  let selectedQuote = getRandomQuote();
let quoteHTML = `<p class="quote">${selectedQuote.quote}</p>`;

if (selectedQuote.citation){
  quoteHTML+=`<span class="citation">${selectedQuote.citation}</span>`;  
};
if (selectedQuote.year){
  quoteHTML+=`<span class="year">${selectedQuote.year}</span>`;
};
quoteHTML+=`<p class="source">${selectedQuote.source}</p>`+`<p class="citation">${selectedQuote.genre}</p>`

document.getElementById('quote-box').innerHTML = quoteHTML;


document.querySelector('body').style.backgroundColor = `rgb(${randomColorFunc()}, ${randomColorFunc()}, ${randomColorFunc()})`;
}

const randomColorFunc = function(){
  let randomRGB = (Math.floor(Math.random()*255));
  return randomRGB;
  };




document.getElementById('load-quote').addEventListener("click", printQuote, false);
