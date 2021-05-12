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

        console.log(data);
    
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
    }
}

main();