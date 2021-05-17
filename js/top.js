async function getExchangeRate() {
    const datapoint = "https://api.currencylayer.com/live?access_key=0424ed3a3f445cf194312116ce4a3b6b&format=1";
    
    const response = await fetch(datapoint);
    const data = await response.json();

    const usdinr = data.quotes.USDINR;

    let exchange = document.getElementById('value1');
    let exchange_text = document.getElementById('change1');

    exchange.innerText = `₹ ${usdinr}`;
    exchange_text.innerText = `USDINR`;
}

function getTime() {
    var time = new Date();

    let date_display = document.getElementById('value2');

    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    date_display.innerText = `${date} ${month} ${year}`;

    let time_display = document.getElementById('change2');
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    time_display.innerText = `${hours} : ${minutes}  ${hours > 12 ? "PM" : "AM"}`;
}

window.onload = getExchangeRate();
setInterval(getTime() ,1000); 