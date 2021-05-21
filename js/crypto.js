let cryptoDataArray = [];
let crypto = [];

async function getCrypto() {

  crypto = [
    "bitcoin",
    "ethereum",
    "bitcoin-cash",
    "litecoin",
    "cardano",
    "dogecoin",
    "eos",
    "stellar",
  ];

  let cards = [
    "bitcoin-card",
    "ethereum-card",
    "bitcoin-cash-card",
    "litecoin-card",
    "cardano-card",
    "dogecoin-card",
    "eos-card",
    "stellar-card",
  ];

  for (let i = 0; i < crypto.length; ++i) {
    // using for loop to simplify process of getting data.
    var datapoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto[i]}`;
    const response = await fetch(datapoint);
    const data = await response.json();

    // again implementing for loop for our similarly named Id's to maximize efficiency and minimize code.
    var one = document.getElementById(`${cards[i]}`);
    var card_price = one.getElementsByClassName("card-price");
    var price_usd = card_price[0];

    price_usd.innerText = `₹${Math.round((data[0].current_price * 73)*100)/100}`;
    var card_percent_change = one.getElementsByClassName("card-price-change");

    var percent = card_percent_change[0];

    percent.innerText = `${
      Math.round(data[0].price_change_percentage_24h * 1000) / 1000
    }%`;

    if (data[0].price_change_percentage_24h > 0) {
      percent.style.color = "#228B22";
    } else {
      percent.style.color = "red";
    }
    cryptoDataArray.push(data[0].price_change_percentage_24h);
    document.getElementsByTagName("BODY")[0].style.height = "100%";
  }


  // this is a function made using chart.js , which gives us accurate chart of % increase and decrease of given crypto currencies.
  function makeChart() {
    let ctx = document.getElementById("crypto-chart");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: crypto,
        datasets: [
          {
            label: "% change in price",
            data: cryptoDataArray,
            backgroundColor: [
              "#f7931a",
              "#627eea",
              "#8dc351",
              "#a5a8a9",
              "#0033ad",
              "#ba9f33",
              "#717171",
              "#000000",
            ],
            borderRadius: 20,
            barPercentage: 0.2,
            barThickness: 75,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 0.2,
            },
          ],
        },
      },
    });
  }
  makeChart();
}
window.onload = getCrypto();

// async function getUsdInr() {
//   const response = await fetch("https://currencyscoop.p.rapidapi.com/latest", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
//       "x-rapidapi-host": "currencyscoop.p.rapidapi.com",
//     },
//   });

//   const data = await response.json();

//   let rate = data.response.rates.INR;
// //   //    console.log(rate);
//   usdinr = rate;
// //   return rate;

//   getCrypto();

// }
