const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    randomDiceThrow: Int
    pi: Float
    eulera: Float
    isTodayFriday: Boolean
    randomCoinTossesUntilTrue: [Boolean]
    e: Float
    eulersSeries: [Float]
  }
`;

const rootValue = () => {
  const today = new Date();
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
  return {
    e: Math.E,
    greeting: "Hello world!",
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 5,
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    eulersSeries: getEulersSeriesValues()
  };
};

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
