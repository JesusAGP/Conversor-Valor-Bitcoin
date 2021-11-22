const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');
var totalUsd;

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    const usd = data.bpi.USD.rate_float;
    totalUsd = usd;
    usdAmount.textContent = `$${usd} USD`;
}

function myFunction() {
    var x = document.getElementById("fname").value;
    var compra = x/totalUsd;
    document.getElementById("demo").innerHTML = compra;
}
