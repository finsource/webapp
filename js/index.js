// this is our js file that is displayed via 'dashboard' section of webapp.
function main() {
    getNews();
    async function getNews() {
        const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=india&region=IN", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })

        const data = await response.json();

        let news1 = document.getElementById('news1');
        let news2 = document.getElementById('news2');
        let news3 = document.getElementById('news3');
        let news4 = document.getElementById('news4');
        let news5 = document.getElementById('news5');
        let news6 = document.getElementById('news6');

        news1.innerHTML = `<a href = "${data.news[0].link}"><h4>${data.news[0].title}</h4><p>${data.news[0].publisher}</p>`;
        news2.innerHTML = `<a href = "${data.news[1].link}"><h4>${data.news[1].title}</h4><p>${data.news[1].publisher}</p>`;
        news3.innerHTML = `<a href = "${data.news[2].link}"><h4>${data.news[2].title}</h4><p>${data.news[2].publisher}</p>`;
        news4.innerHTML = `<a href = "${data.news[3].link}"><h4>${data.news[3].title}</h4><p>${data.news[3].publisher}</p>`;
        news5.innerHTML = `<a href = "${data.news[4].link}"><h4>${data.news[4].title}</h4><p>${data.news[4].publisher}</p>`;
        news6.innerHTML = `<a href = "${data.news[5].link}"><h4>${data.news[5].title}</h4><p>${data.news[5].publisher}</p>`;

        getStocks();
    }

    async function getStocks() {
        
        let stock = ['RELIANCE' , 'HDFC' , 'INFY' , 'HINDUNILVR' , 'TCS' , 'ITC' , 'SBIN' , 'BAJFINANCE' , 'TATAMOTORS'];
        const api_key = 'M8V83POXXO8543AK';

        for (let i=0 ; i<stock.length ; i++) {
            const datapoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock[i]}.BSE&outputsize=full&apikey=${api_key}`;

            const response = await fetch(datapoint);
            const data = await response.json();

            console.log(data);

            var date = new Date();

            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate() - 1,
                    year = d.getFullYear();

                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;

                return [year, month, day].join('-');
            }

            date = formatDate(date);

            let price = data['Time Series (Daily)'];
            let price_now = price[date];
            price_now = price_now["4. close"];
            console.log(price_now);

            let stock_name = data["Meta Data"];
            stock_name = stock_name["2. Symbol"];
            stock_name = stock_name.split('.');
            let display_name = stock_name[0];
        
            // var popular_list = document.getElementById('popular-today');
            // var list_item_1 = popular_list.querySelector('li');

                
            var company1 = document.getElementById('first-company');
            var company2 = document.getElementById('second-company');
            var company3 = document.getElementById('third-company');
            var company4 = document.getElementById('fourth-company');
            var company5 = document.getElementById('fifth-company');
            var company6 = document.getElementById('sixth-company');

                
            company1.innerHTML = `<h4>${display_name}</h4><h4 id = "price-of-stock">₹${price_now}</h4>`;
            
        }
        
    }
}

main();