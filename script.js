function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            const conversionRate = data.rates[toCurrency];
            const convertedAmount = (amount * conversionRate).toFixed(2);
            document.getElementById("convertedAmount").textContent = convertedAmount;
        })
        .catch((error) => {
            console.error(error);
        });
}
