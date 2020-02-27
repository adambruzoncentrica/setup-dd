// Constants

// Variables
let firstDate, option;
let highlighter = "";

let urlParams = new URLSearchParams(window.location.search);
let date = (urlParams.get('date')) ? urlParams.get('date') : 1;
let type = (urlParams.get('type')) ? urlParams.get('type') : "energy";
let hl = urlParams.get('hl');

let balance = (urlParams.get('balance')) ? parseInt(urlParams.get('balance')) : 0;
let total = (urlParams.get('total')) ? parseInt(urlParams.get('total')) : balance + randomIntFromTo(20000, 60000);
let term = (urlParams.get('term')) ? parseInt(urlParams.get('term')) : 10;

    balance = Math.round(balance);
let monthly = (Math.round((total - balance) / term) < 1000) ? 1000 : Math.round((total - balance) / term);

urlParams.set('total', total);

// Functions
function randomIntFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
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
    firstDate = moment.utc().date(date).add(6, 'days').format("Do MMMM YYYY");
    break;
  }
}

if (hl == "info") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="info"><h3 slot="heading">Payment date updated</h3><p>You updated your regular monthly payment date.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
} else if (hl == "error") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="error"><h3 slot="heading">Your bank details seem to be incorrect</h3><p>We have checked the bank details you provided and they appear to be incorrect.</p><p>Please check them and try to submit again.</p></ns-highlighter></div></ns-panel>';
} else if (hl == "success" && type == "energy") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="success"><h3 slot="heading">Refund option updated</h3><p>You have requested your credit be put towards your energy usage.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
} else if (hl == "success" && type == "cheque") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="success"><h3 slot="heading">Refund option updated</h3><p>You have requested a refund by cheque. Your cheque will be processed and sent out within 3-5 working days upon recieving your Direct Debit instruction.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
}

let pt = (type == "cheque") ? total : total - balance;
let rd = (type == "cheque") ? 'You have chosen to receive <b>this credit as a cheque</b>.' : 'This credit has been put towards <b>your annual energy usage</b>.';
let cp = (type == "cheque") ? '<b>£200</b> of your account credit will be sent to you as a cheque in the post.' : '<b>£200</b> of your account credit will be put towards your energy usage.';

if (document.getElementById('highlighter-container') && hl) { document.getElementById('highlighter-container').innerHTML = highlighter; }
// if (document.getElementById('date')) { document.getElementById('date').innerHTML = moment.utc().date(date).format("Do"); }
// if (document.getElementById('refund-description')) { document.getElementById('refund-description').innerHTML = rd; }
// if (document.getElementById('credit-paragraph')) { document.getElementById('credit-paragraph').innerHTML = cp; }
// if (document.getElementById('plan-total')) { document.getElementById('plan-total').innerHTML = pt; }
// if (document.getElementById('first')) { document.getElementById('first').innerHTML = pt / term; }
// if (document.getElementById('monthly')) { document.getElementById('monthly').innerHTML = pt / term; }
// if (document.getElementById('first-date')) { document.getElementById('first-date').innerHTML = firstDate; }
// if (document.getElementById('review-date')) { document.getElementById('review-date').innerHTML = moment.utc().add(6, 'months').format("Do MMMM YYYY"); }
//
// if (document.getElementById('change-date')) { document.getElementById('change-date').href = "payment-date.html?date=" + date + "&type=" + type + "&hl=" + hl; }
// if (document.getElementById('keep-date')) { document.getElementById('keep-date').href = "plan.html?date=" + date + "&type=" + type + "&hl="; }
// if (document.getElementById('bank-details')) { document.getElementById('bank-details').href = "bank-details.html?date=" + date + "&type=" + type + "&hl=" + hl; }
// if (document.getElementById('refund-options')) { document.getElementById('refund-options').href = "refund.html?date=" + date + "&type=" + type + "&hl=" + hl; }
