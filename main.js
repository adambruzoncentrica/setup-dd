// Constants

// Variables
let firstDate, option;
let highlighter = "";

let urlParams = new URLSearchParams(window.location.search);

// Defaults
let date = (urlParams.get('date')) ? urlParams.get('date') : 1;
let refundType = (urlParams.get('refundType')) ? urlParams.get('refundType') : "energy";
let highlighterIndex = urlParams.get('highlighterIndex');

let balance = (urlParams.get('balance')) ? parseInt(urlParams.get('balance')) : 0;
    balance = Math.round(balance);

let totalEnergy = (urlParams.get('totalEnergy')) ? parseInt(urlParams.get('totalEnergy')) : balance + randomIntFromTo(20000, 60000);
let term = (urlParams.get('term')) ? parseInt(urlParams.get('term')) : 10;

let monthly = (refundType === "energy") ? Math.round((totalEnergy - balance) / term) : Math.round(totalEnergy / term);
    monthly = (monthly < 1000) ? 1000 : monthly;

let totalPayment = monthly * term;

let reviewDate = moment.utc().add(6, 'months').format("Do MMMM YYYY");

urlParams.set('totalEnergy', totalEnergy);

// Functions
function randomIntFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function emptyElementById(id) {
  let element = document.getElementById(id);
  if (element) {
    while (element.firstChild) element.removeChild(element.firstChild); // Empty each child
  }
  return element;
}

function updateHrefs(htmlElement) {
  if (!urlParams.toString()) { return false; }
  let actions = (htmlElement) ? [htmlElement] : document.querySelectorAll("[href]");
  for (let i = 0; i < actions.length; i++) {
    let urlArray = actions[i].getAttribute('href').split("?");
    actions[i].setAttribute('href', urlArray[0] + "?" + urlParams.toString());
  }
}

if (date > moment.utc().date()) { firstDate = moment.utc().date(date).format("Do MMMM YYYY"); }
else { firstDate = moment.utc().date(date).add(1, "months").format("Do MMMM YYYY"); }

for (let i = 0; i < 5; i++) {
  if (moment.utc().add(i, 'days').date() == date) {
    firstDate = moment.utc().date(date).add(6, "days").format("Do MMMM YYYY");
    break;
  }
}

function renderHighlighter(highlighter) {

  let container = document.getElementById('highlighter-container');
  if (container) {
    container.replaceWith(highlighter);
  }
}
