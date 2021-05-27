async function getStocks() {
    const respone = await fetch(
        "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
        {
            method: "GET",
            headers: {
                "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
                "x-rapidapi-host": "latest-stock-price.p.rapidapi.com",
            },
        }
    );

    const data = await respone.json();

    // using for loop for minimizing code and automating trivial jobs.
    for (let i = 1; i <= 8; i++) {

        let num = `stock${i}-card`;
        let card = document.getElementById(num);
        // console.log(card);

        let stock_name = card.getElementsByClassName("stock-name-card");
        stock_name = stock_name[0];

        stock_name.innerText = data[i].symbol;

        let stock_code = card.getElementsByClassName("stock-short");
        stock_code = stock_code[0];
        stock_code.innerText = `#${i}`;

        let stock_price = card.getElementsByClassName("card-price");
        stock_price = stock_price[0];
        stock_price.innerText = `₹${data[i].lastPrice}`;

        let stock_change = card.getElementsByClassName("card-price-change");
        stock_change = stock_change[0];
        stock_change.innerText = `${data[i].pChange}%`;

        if (data[i].pChange > 0) {
            stock_change.style.color = "#33cc33";
        } else {
            stock_change.style.color = "red";
        }
    }
}

document.getElementById('search-img').addEventListener('click' , () => {
  let search_input = document.getElementById("search-text").value;
  window.open(`https://www.google.com/search?q=${search_input}`);
});

window.onload = getStocks();
