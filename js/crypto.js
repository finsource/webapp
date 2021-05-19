let cryptoDataArray = [];
let crypto = [];
async function getCrypto() {

    crypto = ['bitcoin', 'ethereum', 'bitcoin-cash', 'litecoin', 'cardano', 'dogecoin', 'eos', 'stellar'];
    let cards = ['bitcoin-card', 'ethereum-card', 'bitcoin-cash-card', 'litecoin-card', 'cardano-card', 'dogecoin-card', 'eos-card', 'stellar-card'];

    for (let i = 0; i < crypto.length; ++i) {

        var datapoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto[i]}`;
        const response = await fetch(datapoint);
        const data = await response.json();

        var one = document.getElementById(`${cards[i]}`);
        var card_price = one.getElementsByClassName('card-price');
        var price_usd = card_price[0];
        price_usd.innerText = `$${data[0].current_price}`;
        var card_percent_change = one.getElementsByClassName("card-price-change");
        // console.log(card_percent_change);
        var percent = card_percent_change[0];

        percent.innerText = `${data[0].price_change_percentage_24h}%`;

        if (data[0].price_change_percentage_24h > 0) {
            percent.style.color = "#228B22";
        } else {
            percent.style.color = "red";
        }
        cryptoDataArray.push(data[0].price_change_percentage_24h);
        document.getElementsByTagName("BODY")[0].style.height = "100%";
    }


    function makeChart() {
        let ctx = document.getElementById("crypto-chart");
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: crypto,
                datasets: [{
                    label: '% change in price',
                    data: cryptoDataArray,
                    backgroundColor: [
                        '#f7931a',
                        '#627eea',
                        '#8dc351',
                        '#a5a8a9',
                        '#0033ad',
                        '#ba9f33',
                        '#717171',
                        '#000000'
                    ],
                    borderRadius: 20,
                    barPercentage: 0.2,
                    barThickness: 75
                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        barPercentage: 0.2
                    }]
                }
            }
        });
    }
    makeChart();
}
window.onload = getCrypto();
