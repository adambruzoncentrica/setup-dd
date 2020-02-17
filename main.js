var urlParams = new URLSearchParams(window.location.search);
const date = (urlParams.get('date')) ? urlParams.get('date') : "1st";
const type = (urlParams.get('type')) ? urlParams.get('type') : "energy";

document.getElementById('date').innerHTML = date;
document.getElementById('change-date').href = "payment-date.html?date=" + date + "&type=" + type;
document.getElementById('bank-details').href = "bank-details.html?date=" + date + "&type=" + type;
document.getElementById('confirm').href = "confirmation-" + type + ".html?date=" + date;
