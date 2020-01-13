const quotes = [
    {quote: "Failure will never overtake me if my determination to succeed is strong enough.",
    quoteId: 1},
    {quote: "Only I can change my life. No one can do it for me.",
    quoteId: 2},
    {quote: "With the new day comes new strength and new thoughts.",
    quoteId: 3},
    {quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    quoteId: 4},
    {quote: "The secret of getting ahead is getting started.",
    quoteId: 5},
    {quote: "It does not matter how slowly you go as long as you do not stop.",
    quoteId: 6},
    {quote: "Push yourself, because no one else is going to do it for you.",
    quoteId: 7},
    {quote: "Sometimes later becomes never. Do it now.",
    quoteId: 8},
    {quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
    quoteId: 9},
    {quote: "Don’t stop when you’re tired. Stop when you’re done.",
    quoteId: 10}
]

export default (n = 1) => {
    Promise.resolve(quotes.sort(() => 0.5 - Math.random()).slice(0,n))
}