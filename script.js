  // ! Binance Dan  Dolar Verisi Çekme
  let h1 = document.getElementById('has1')
  let h2 = document.getElementById('has2') 
  async function fetchExchangeRate() {
    try {
        const symbol = "USDTTRY"; // USDT/TRY trading pair
        const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const symbolName = data.symbol;
            const price = parseFloat(data.price);

            h2.innerHTML = price;
            h1.innerHTML =symbol;
        } else {
            console.error(`Error: ${response.status} - ${data.msg}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
window.onload = fetchExchangeRate();
setInterval(fetchExchangeRate, 1000);