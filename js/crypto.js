async function getCrypto() {

    let crypto = ['bitcoin' , 'ethereum' , 'bitcoin-cash' , 'litecoin' , 'cardano' , 'dogecoin' , 'eos' , 'stellar'];
    let cards = ['bitcoin-card' , 'ethereum-card' , 'bitcoin-cash-card' , 'litecoin-card' , 'cardano-card' , 'dogecoin-card' , 'eos-card' , 'stellar-card'];

    for (let i=0; i<crypto.length ; ++i ) {

        var datapoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto[i]}`;

        const response = await fetch(datapoint);
        const data = await response.json();

        console.log(data);

        var one = document.getElementById(`${cards[i]}`);
        
        var card_price = one.getElementsByClassName('card-price');
            
        var price_usd = card_price[0];

        price_usd.innerText = `$${data[0].current_price}`;

        var card_percent_change = one.getElementsByClassName("card-price-change");
        console.log(card_percent_change);
        var percent = card_percent_change[0];

        percent.innerText = `${data[0].price_change_percentage_24h}%`;
    }
}

window.onload = getCrypto();