## finsource

A simple web app for all of your finance related news and updates.

#### Api's used:

- <a href ="https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=india&region=IN">Stock news api</a>

- <a href = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock[i]}.BSE&outputsize=full&apikey=${api_key}">Stock realtime prices</a>

```javascript
const datapoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=
                   ${stock[i]}.BSE&outputsize=full&apikey=${api_key}`;

const response = await fetch(datapoint);
const data = await response.json();
```

- <a href = "https://currencyscoop.p.rapidapi.com/latest">Exchange rates api</a>

```javascript
//js/top.js
async function getExchangeRate() {
  //code here
}
```

- <a href = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=btc;">Crypto real time data api</a>

- <a href = "https://rapidapi.com/suneetk92/api/latest-stock-price">Latest Indian Stock Market prices and data</a>