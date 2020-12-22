const Quotes = require("inspirational-quotes");

const rootValue = () => {
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const NAME_OF_CURRENCY = ["PLN", "EUR", "GBP", "CHF", "USD"];
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
  const randomCoinToss = () => Math.random() >= 0.5;
  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };
  const getEulersSeriesValues = () => {
    const result = [];
    for (let n = 1; n <= 1000; n++) {
      result.push((1 + 1 / n) ** n);
    }
    return result;
  };
  const getRandomCurrency = () => {
    const name = NAME_OF_CURRENCY[Math.floor(Math.random() * 5)];
    return name
  }
  return {
    e: Math.E,
    greeting: "Hello world!",
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 2,
    randomQuote: Quotes.getQuote(),
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    fewRandomQuotes: [...Array(getRandomDiceThrow(4) + 1)].map(() => Quotes.getQuote()),
    eulersSeries: getEulersSeriesValues(),
    currency: getRandomCurrency()
  };
};

module.exports = rootValue;