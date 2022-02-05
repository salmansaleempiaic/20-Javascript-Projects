// Declare function always before you call it
// Get Quote from API

const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitter = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

// Show Loader
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true
}
// Hide Loader
const complete = () => {
    loader.hidden = true;
    quoteContainer.hidden = false
}

const getQuote = async () => {
    loading();
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try{
        const response = await fetch(proxy + apiURL);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        complete();
    }
    catch(error){
        getQuote();
    }
}

newQuoteBtn.addEventListener("click",getQuote);

// Onload

getQuote();
// If still not working then open the proxy in the chrome and get click get temporary access and it will work