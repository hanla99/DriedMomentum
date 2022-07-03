const quotes = [
  {
    quote:
      "If I have seen further it is only by standing on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    quote: "I won't be a Rock Star. I will be a Legend.",
    author: "Freddie Mercury",
  },
  {
    quote:
      "The future is already here — it's just not very evenly distributed.",
    author: "William Ford Gibson",
  },
  {
    quote: "PLUS ULTRA",
    author: "Karl V",
  },
  {
    quote:
      "The death of one man is a tragedy; the death of millions is a statistic.",
    author: "Joseph Vissarionovich Stalin",
  },
  {
    quote: "Sire, je n'ai pas eu besoin de cette hypothèse.",
    author: "Pierre-Simon Laplace",
  },
  {
    quote: "Si vis pacem, para bellum.",
    author: "Vegetius",
  },
  {
    quote: "Astronomy's much more fun when you're not an astronomer.",
    author: "Brain May",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "It appears to be an error from the computer.",
    author: "Stanislav Petrov",
  },
  {
    quote: "Bolt actions speak louder than words.",
    author: "Craig Roberts",
  },
  {
    quote: "Aim for the moon. If you miss, you may hit a star.",
    author: "W. Clement Stone",
  },
  {
    quote: "What does not kill me makes me stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "ALEA IACTA EST.",
    author: "Gaius Julius Caesar",
  },
  {
    quote: "You made it, and you are fucked.",
    author: "Robert De Niro",
  },
  {
    quote: "Could you patent the sun?",
    author: "Jonas Edward Salk",
  },
  {
    quote: "Not All Those Who Wander Are Lost.",
    author: "J. R. R. Tolkien",
  },
  {
    quote: "Be nice to nerds. Chances are you'll end up working for one.",
    author: "Bill Gates",
  },
  {
    quote: "Killing the dog does not cure the bite.",
    author: "Abraham Lincoln",
  },
  {
    quote: "You may not be interested in war, but war is interested in you.",
    author: "Leon Trotsky",
  },
];

const quoteText = document.querySelector("#quote span:nth-child(1)");
const quoteAuthor = document.querySelector("#quote span:nth-child(2)");

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
  // round, ceil 사용 시 length를 넘는 수가 나올 수 있음.
}

const randomQuote = quotes[getRandomNumber(quotes.length)];

quoteText.innerText = randomQuote.quote;
quoteAuthor.innerText = " - " + randomQuote.author;
