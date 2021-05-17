var usdinr;

async function getCrypto() {

    getExchangeRate();

    const api_key = "3969763ee377cc9568ac8e3dd474c9b5";

    const datapoint = `https://api.coinlayer.com/api/live?access_key=${api_key}`;

    const response = await fetch(datapoint);
    const data = await response.json();

    var rates = data.rates;

    rates = rates.BTC;
    rates = Math.round(rates);

    document.getElementById("btc-price-usd").innerText = `$${rates}`;
    document.getElementById("btc-price-inr").innerText = `₹${rates * 72}`;

    document.getElementById("eth-price-usd").innerText = `$${Math.round(data.rates.ETH)}`;
    document.getElementById("eth-price-inr").innerText = `₹${Math.round(data.rates.ETH * usdinr)}`;

    document.getElementById('bch-price-usd').innerHTML = `$${Math.round(data.rates.BCH)}`;
    document.getElementById("bch-price-inr").innerText = `₹${Math.round(data.rates.BCH * usdinr)}`;

    document.getElementById('ltc-price-usd').innerHTML = `$${Math.round(data.rates.LTC)}`;
    document.getElementById("ltc-price-inr").innerText = `₹${Math.round(data.rates.LTC * usdinr)}`;

    document.getElementById('ada-price-usd').innerHTML = `$${(data.rates.ADA)}`;
    document.getElementById("ada-price-inr").innerText = `₹${Math.round(data.rates.ADA * usdinr)}`;

    document.getElementById('ada-price-usd').innerHTML = `$${(data.rates.ADA)}`;
    document.getElementById("ada-price-inr").innerText = `₹${Math.round(data.rates.ADA * usdinr)}`;

    document.getElementById('doge-price-usd').innerHTML = `$${(data.rates.DOGE)}`;
    document.getElementById("doge-price-inr").innerText = `₹${Math.round(data.rates.DOGE * usdinr)}`;

    document.getElementById('eos-price-usd').innerHTML = `$${(data.rates.EOS)}`;
    document.getElementById("eos-price-inr").innerText = `₹${Math.round(data.rates.EOS * usdinr)}`;

    document.getElementById('xlm-price-usd').innerHTML = `$${(data.rates.XLM)}`;
    document.getElementById("xlm-price-inr").innerText = `₹${Math.round(data.rates.XLM * usdinr)}`;
}

async function getExchangeRate() {
    const datapoint =
        "https://api.currencylayer.com/live?access_key=0424ed3a3f445cf194312116ce4a3b6b&format=1";

    const response = await fetch(datapoint);
    const data = await response.json();

    usdinr = data.quotes.USDINR;

    console.log(` current USDINR rate = ${usdinr}`);
}

window.onload = getCrypto();