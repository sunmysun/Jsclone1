const quotes = [
    {
        quote: "I won’t get upset at you about a mistake. I’ll get upset at you for the next mistake that comes from still thinking about the last mistake.",
        author: "Doc Rivers",
    },
    {
        quote: "Champions keep playing until they get it right. Then they play more.",
        author: "Billie Jean King",
    },
    {
        quote: "The growth mindset says all of these things can be developed. All – you, your partner, and the relationship – are capable of growth and change.",
        author: "Carol Dweck",
    },
    {
        quote: "“Part of being a champ is acting like a champ. You have to learn how to win and not run away when you lose.",
        author: "Nancy Kerrigan",
    },
    {
        quote: "Either find a way to succeed or make one.",
        author: "Suzie Hoyt, Double-Goal Coach® Award Winner, 2017",
    },
    {
        quote: "Failure happens all the time. It happens every day in practice. What makes you better is how you react to it.",
        author: "Mia Hamm",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)])

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;