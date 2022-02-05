// Global Variables
let apiQuotes = [];
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

const newQuote = () => {
    loading();
    // Pick a random quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteText.textContent = quote.text;
    // Check Author
    if(!quote.author){
        authorText.textContent = "Unknown"
    }else{
        authorText.textContent = quote.author;
    }
    // Check Quote Length
    if(quote.text.length > 50){
        quoteText.classList.add("long-quote")
    }else{
        quoteText.classList.remove("long-quote")
    }
    complete();
}

// Get Quotes From API

const getQuote = async () => {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiURL) // This will wait untill we get a response from the api
        apiQuotes = await response.json(); // This will give us required data in []
        console.log(apiQuotes)
        newQuote();
    }
    catch(error){
        alert(error)
    }
}

// Tweet a Quote

const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterURL, '_blank')
}

twitter.addEventListener("click",tweetQuote);
newQuoteBtn.addEventListener("click",newQuote);

getQuote()
