

class quoteGenerator{

    
    constructor(){

        this.quotes = [
            ["Never give up and good luck will find you.", "Falcor"],
            ["The real secret to sucess is enthusiasm","Walter Chrysler"],
            ["Fear is the mind killer", "Frank Herbert"],
            ["Fear has two meanings: Forget everything and run or face everything and rise.","Zig Ziglar"],
            ["Knowing is not enough, we must also do.","Bruce Lee"],
            ["If I have seen further, it is by standing on the shoulders of giants.","Isaac Newton"],
            ["Reason is the first victim of strong emotion.","Frank Herbert"],
            ["The only easy day was yesterday.","Seal Motto"],
            ["It's a dangerous business going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.","J.R.R. Tolkien"],
            ["Problems cannot be solved at the same level of awareness that created them.","Albert Einstein"],
            ["There are two main driving forces in the universe: Accident and Error.","Frank Herbert"],
            ["When you know about something it stops being a nightmare. When you know how to fight something, it stops being so threatening.","Andrzej Sapkowski"],
            ["What senses do we lack that we cannot see or hear another world all around us?","Frank Herbert"],
            ["Hope clouds observation.","Frank Herbert"],
            ["Only put off until tomorrow what you are willing to die having left undone.","Pablo Picasso"]
          ];
    }
    


    returnNewQuote(){

        let x = Math.floor(Math.random() * (this.quotes.length - 1))

        console.log(x)

        let newQuote = this.quotes[x]

        return newQuote;
    }



}


let q = new quoteGenerator();

let quote = q.returnNewQuote()

console.log(quote)

let x = document.getElementById("inspirationalQuotes")
let y = document.getElementById("inspirationalAuthor")

x.innerHTML = quote[0];
y.innerHTML = quote[1];




