const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    })
}

//setInterval(fetchBtc, 1000);

fetchBtc();