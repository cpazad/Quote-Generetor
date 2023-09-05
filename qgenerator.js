// Global Vairables
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('');
const loader = document.getElementById('loader');

let apiQuotes = [];
// Show New Quote
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    if (!quote.author) {
        authorText.textContent = ` - Unknown `;
    } else {
        authorText.textContent = " - " + quote.author;
    }

    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
    // Loading complete function
    complete()
    
}

async function getQuotes(){
    loading()
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote()
    }catch(error){
        alert(error);
    }
}

 getQuotes();
 // loading()


 // Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// Loader 
function loading () {
loader.hidden = false ;
quoteContainer.hidden = true ;
}

// complete function

function complete () {
    loader.hidden = true ;
    quoteContainer.hidden = false ;  
}