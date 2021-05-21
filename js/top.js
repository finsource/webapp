async function getExchangeRate() {

    let exchange = document.getElementById('value1');
    let exchange_text = document.getElementById('change1');

    const response = await fetch("https://currencyscoop.p.rapidapi.com/latest", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
            "x-rapidapi-host": "currencyscoop.p.rapidapi.com",
        },
    });

    const data = await response.json();

    let rate = data.response.rates.INR;

    console.log(`current USDINR rate = ${rate}`);

    exchange.innerText = `₹ ${Math.round(rate * 1000) / 1000}`;
    exchange_text.innerText = `USDINR`;

    exchange_text.style.transition = "0.2s ease";
}

function getTime() {
    var time = new Date();

    let date_display = document.getElementById('value2');

    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    date_display.innerText = `${date} ${month + 1} ${year}`;

    let time_display = document.getElementById('change2');
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    time_display.innerText = `${hours > 12 ? (hours-12):(hours)} : ${minutes} : ${seconds}  ${hours >= 12 ? "PM" : "AM"}`;
    time_display.style.color = "#ffffff";
    time_display.style.fontWeight = "600";

    date_display.style.transition = "0.2s ease";
    time_display.style.transition = "0.2s ease";
}

window.onload = getExchangeRate();
setInterval(getTime, 1000);