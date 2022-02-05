// Declare function always before you call it
// Get Quote from API

const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitter = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

const showLoadingSpinner = () => {
    loader.hidden = false;
    quoteContainer.hidden = true
}
const removeLoadingSpinner = () => {
    loader.hidden = true;
    quoteContainer.hidden = false
}

const getQuoteFromAPI = async () => {
    showLoadingSpinner();
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try{
        const response = await fetch(proxy + apiURL);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        removeLoadingSpinner();
    }
    catch(error){
        getQuoteFromAPI();
    }
}

newQuoteBtn.addEventListener("click",getQuote);

// Onload

getQuoteFromAPI();
// If still not working then open the proxy in the chrome and get click get temporary access and it will work