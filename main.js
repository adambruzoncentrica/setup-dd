// Constants

// Variables
let firstDate, option;
let highlighter = "";

let urlParams = new URLSearchParams(window.location.search);

// Defaults
let paymentDate = (urlParams.get('paymentDate')) ? urlParams.get('paymentDate') : 1;
let refundType = (urlParams.get('refundType')) ? urlParams.get('refundType') : "energy";
let highlighterIndex = urlParams.get('highlighterIndex');

let balance = (urlParams.get('balance')) ? parseInt(urlParams.get('balance')) : 0;
    balance = Math.round(balance);

var rand = randomIntFromTo(20000, 60000);
var totalEnergy = (urlParams.get('totalEnergy')) ? parseInt(urlParams.get('totalEnergy')) : balance + rand;
    urlParams.set('totalEnergy', totalEnergy);

let term = (urlParams.get('term')) ? parseInt(urlParams.get('term')) : 10;

let totalPayment = (refundType === "energy") ? Math.round(totalEnergy - balance) : totalEnergy;

var monthlyPrice = Math.round(totalPayment / term);
    monthlyPrice = (monthlyPrice < 1000) ? 1000 : monthlyPrice;

    totalPayment = monthlyPrice * term;

let reviewDate = moment.utc().add(6, 'months').format("Do MMMM YYYY");

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

if (paymentDate > moment.utc().date()) { firstDate = moment.utc().date(paymentDate).format("Do MMMM YYYY"); }
else { firstDate = moment.utc().date(paymentDate).add(1, "months").format("Do MMMM YYYY"); }

for (let i = 0; i < 5; i++) {
  if (moment.utc().add(i, 'days').date() == paymentDate) {
    firstDate = moment.utc().date(paymentDate).add(6, "days").format("Do MMMM YYYY");
    break;
  }
}

function renderHighlighter(highlighter) {

  let container = document.getElementById('highlighter-container');
  if (container) {
    container.replaceWith(highlighter);
  }
}

let hideShowWrapper = document.querySelectorAll('.hide-show-wrapper');
for (var i = 0; i < hideShowWrapper.length; i++) {
  let hideShowElements = hideShowWrapper[i].querySelectorAll('.hide-show-me');
  let hideShowController = hideShowWrapper[i].querySelector('.hide-show-controller');
  hideShowController.addEventListener('click', function() {
    for (var i = 0; i < hideShowElements.length; i++) {
      if (hideShowElements[i].style.display === "none") {
        hideShowElements[i].style.display = "block";
      } else {
        hideShowElements[i].style.display = "none";
      }
    }
  });
}
