const text = document.querySelector('.quote')
const author = document.querySelector('.author')
const genererBtn = document.querySelector('.generer')
const tweetBtn = document.querySelector('.twitter-share-button');
const getQuote = async () => {
    const res = await fetch('/citations.json');
    const quotes = await res.json();
    const num = Math.floor(Math.random() * quotes.length);
    const item = quotes[num]
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
    //console.log(item)
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
}

genererBtn.addEventListener('click', getQuote)

getQuote();