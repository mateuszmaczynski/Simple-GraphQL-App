const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: OurQuery
  }
  """
  Our special root query type.
  """
  type OurQuery {
    """
    __A simple greeting__
    """
    greeting: String!
    """
    **Do not feel obliged to click on them. Although they are interesting.**
    """
    interestingUrls: [String!]!
    """
    *Result of a 6-sided dice throw. Returns a random number between **1** and **6**.
    ![Image](https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/b7/10/7a/b7107a4f-0d21-320e-dfb7-463ba921f968/source/256x256bb.jpg)
    """
    randomDiceThrow: Int!
    """
    **A pi *constant. Ratio of a circle's circumference to its diameter.*
    [Read more on wikipedia](https://en.wikipedia.org/wiki/Pi)**
    """
    pi: Float!
    """
    An answer to an important question. Especially when you are at the office few days after monday.
    """
    isTodayFriday: Boolean!
    """
    When you really need to succed.
    """
    randomCoinTossesUntilTrue: [Boolean!]!
    """
    It tells you what day is it now.
    """
    today: DayOfWeek!
    """
    Consecutive list of days when most of us need to work.
    """
    workDays: [DayOfWeek!]!
    """
    A random quote to inspire or cheer you up.
    """
    randomQuote: Quote!
    """
    If one random quote won't do. Maybe a few will.
    """
    fewRandomQuotes: [Quote!]!
    """
     *Euler's number - (mathematical constant)*
    """
    e: Float
    """
     **The first 1,000 (thousand) elements of the following sequence of numbers (1 + 1 / n) ^ n**
    """
    eulersSeries: [Float]
    """
      **One of name of currency**
    """
    currency: TypeOfCurrency!
  }

  """
  ## A concise representation of each weekday. There are 7 of them.
  """
  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
  
  """
  ## Popular type of currencies
  """
  enum TypeOfCurrency {
    PLN
    EUR
    GBP
    CHF
    USD
  }

  """
  An object representing a quote with an author
  """
  type Quote {
    """
    **Text of the quote**
    """
    text: String
    """
    *Author's name*
    """
    author: String
  }
`;

module.exports = typeDefs;