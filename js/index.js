// this is our js file that is displayed via 'dashboard' section of webapp.
function main() {
  getNews();
  getStocks();

  async function getNews() {

    const response = await fetch("https://seeking-alpha.p.rapidapi.com/news/list-trending", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
        "x-rapidapi-host": "seeking-alpha.p.rapidapi.com",
      },
    })
      
    const data = await response.json();

    // console.log(data);

    let news1 = document.getElementById("news1");
    let news2 = document.getElementById("news2");
    let news3 = document.getElementById("news3");
    let news4 = document.getElementById("news4");
    let news5 = document.getElementById("news5");
    let news6 = document.getElementById("news6");

    // console.log(data.data[0].attributes.title);
    // console.log(data.data[0].links.self);

    news1.innerHTML = `<a href = "https://seekingalpha.com/${data.data[0].links.self}"><h4>${data.data[0].attributes.title}</h4>`;
    news2.innerHTML = `<a href = "https://seekingalpha.com/${data.data[1].links.self}"><h4>${data.data[1].attributes.title}</h4>`;
    news3.innerHTML = `<a href = "https://seekingalpha.com/${data.data[2].links.self}"><h4>${data.data[2].attributes.title}</h4>`;
    news4.innerHTML = `<a href = "https://seekingalpha.com/${data.data[3].links.self}"><h4>${data.data[3].attributes.title}</h4>`;
    news5.innerHTML = `<a href = "https://seekingalpha.com/${data.data[4].links.self}"><h4>${data.data[4].attributes.title}</h4>`;
    // news6.innerHTML = `<a href = "https://seekingalpha.com/${data.data[5].links.self}"><h4>${data.data[5].attributes.title}</h4>`;
  }

  async function getStocks() {
    let stock = [
      "RELIANCE",
      "HDFC",
      "INFY",
      "HINDUNILVR",
      "TCS",
      "ITC",
    ];
    const api_key = "M8V83POXXO8543AK";

    for (let i = 0; i < stock.length; i++) {
      const datapoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock[i]}.BSE&outputsize=full&apikey=${api_key}`;

      const response = await fetch(datapoint);
      const data = await response.json();

      var date = new Date();

      function formatDate(date) {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate() - 1,
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      }

      date = formatDate(date);

      // console.log(data);
      let last_refreshed = data['Meta Data'];
      last_refreshed = last_refreshed["3. Last Refreshed"];

      // console.log(last_refreshed);

      let price = data["Time Series (Daily)"];
      let price_now = price[last_refreshed];
      price_now = price_now["4. close"];

      let stock_name = data["Meta Data"];
      stock_name = stock_name["2. Symbol"];
      stock_name = stock_name.split(".");
      let display_name = stock_name[0];

      var list = document
        .getElementById("popular-today")
        .querySelectorAll("li");
      list[
        i
      ].innerHTML = `<h4>${display_name}</h4><h4 id = "price-of-stock">₹${price_now}</h4>`;
    }
  }
}

main();

document.getElementById("dropbox").addEventListener("click", () => {
  window.open("https://www.google.com/finance/quote/DBX:NASDAQ");
});

document.getElementById("seagate").addEventListener("click", () => {
  window.open(
    "https://www.google.com/finance/quote/STX:NASDAQ?sa=X&ved=2ahUKEwjK7PX81cbwAhV35nMBHdWxA3IQ_AUoAXoECAEQAw"
  );
});

document.getElementById("facebook").addEventListener("click", () => {
  window.open("https://www.google.com/finance/quote/FB:NASDAQ");
});

document.getElementById("spotify").addEventListener("click", () => {
  window.open("https://www.google.com/finance/quote/SPOT:NYSE");
});