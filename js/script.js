/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*jshint esversion: 8*/


/**
 * quotes
 * Array of objects.
    * Object properties:
      * quote {string}
      * source {string}
      * citation {string}[optional]
      * year {num}[optional]
      * genre {string}
**/
const quotes = [{
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
 * getRandomQuote
 *  function to generate random object selection (using Math.random method) from array 'quotes'
 *    returns 'randomQuote' object 
 */
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}


/***
 * printQuote
 *  function to define html content for 'quote-box' div and paint to screen
 *    secondary function to change body background colour to random colour for each new returned quote object
 ***/

function printQuote() {
  //define variable for HTML content
  let quoteHTML;

  //get a random quote from the quotes array-of-objects. Return quote object
  let selectedQuote = getRandomQuote();

  //build HTML content using properties from returned quote object
  quoteHTML = `<p class="quote">${selectedQuote.quote}</p>`;
  quoteHTML += `<p class="source">${selectedQuote.source}`;

  //if available, concat citation and year
  if (selectedQuote.citation) {
    quoteHTML += `<span class="citation">${selectedQuote.citation}</span>`;
  }
  if (selectedQuote.year) {
    quoteHTML += `<span class="year">${selectedQuote.year}</span>`;
  }
  //concat genre and close source p tag
  quoteHTML += `<span class="genre">${selectedQuote.genre}</span></p>`;

  //Paint the screen text
  document.getElementById('quote-box').innerHTML = quoteHTML;

  //Paint the screen background with random colour
  document.querySelector('body').style.backgroundColor = `rgb(${randomColorFunc()}, ${randomColorFunc()}, ${randomColorFunc()})`;
}

/***
 * randomColorFunc
 *  function to randomly assign an integer RGB compliant number to variable and return
 ***/
const randomColorFunc = function () {
  let randomRGB = (Math.floor(Math.random() * 255));
  return randomRGB;
};

/***
 * load-quote div event listener - callback printQuote to define
 * and paint randomly selected quote
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//automatically refresh the selected quote and page every 10s
let refresh = window.setInterval(printQuote, 10000);