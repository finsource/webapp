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

async function getNews() {
  const response = await fetch(
    "https://seeking-alpha.p.rapidapi.com/news/list-trending",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1f036ab3bdmsha432bc3323a6641p1a4a6cjsn47c217d23a5d",
        "x-rapidapi-host": "seeking-alpha.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  // console.log(data);

  let news1 = document.getElementById("news1");
  let news2 = document.getElementById("news2");
  let news3 = document.getElementById("news3");
  let news4 = document.getElementById("news4");
  let news5 = document.getElementById("news5");
  let news6 = document.getElementById("news6");

  news1.innerHTML = `<a href = "https://seekingalpha.com/${data.data[0].links.self}"><h4>${data.data[0].attributes.title}</h4>`;
  news2.innerHTML = `<a href = "https://seekingalpha.com/${data.data[1].links.self}"><h4>${data.data[1].attributes.title}</h4>`;
  news3.innerHTML = `<a href = "https://seekingalpha.com/${data.data[2].links.self}"><h4>${data.data[2].attributes.title}</h4>`;
  news4.innerHTML = `<a href = "https://seekingalpha.com/${data.data[3].links.self}"><h4>${data.data[3].attributes.title}</h4>`;
  news5.innerHTML = `<a href = "https://seekingalpha.com/${data.data[4].links.self}"><h4>${data.data[4].attributes.title}</h4>`;
  // news6.innerHTML = `<a href = "https://seekingalpha.com/${data.data[5].links.self}"><h4>${data.data[5].attributes.title}</h4>`;
}

async function getPopularStocks() {
  const response = await fetch(
    "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
        "x-rapidapi-host": "latest-stock-price.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  // console.log(data);

  var list = document.getElementById("popular-today").querySelectorAll("li");

  for (var i=0 ; i<6 ; i++) {
    let display_name = data[i+1].symbol;
    let price_now = data[i+1].lastPrice;
    list[
      i
    ].innerHTML = `<h4><a href = "https://www1.nseindia.com/live_market/dynaContent/live_analysis/top_gainers_losers.htm">${display_name}</h4><h4 id = "price-of-stock">₹${price_now}</a></h4>`;
  }
}

document.getElementById('search-img').addEventListener('click' , () => {
  let search_input = document.getElementById("search-text").value;
  window.open(`https://www.google.com/search?q=${search_input}`);
});


window.onload = (getNews() , getPopularStocks());