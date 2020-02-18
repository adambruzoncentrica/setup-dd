var urlParams = new URLSearchParams(window.location.search);
const date = (urlParams.get('date')) ? urlParams.get('date') : 1;
const type = (urlParams.get('type')) ? urlParams.get('type') : "energy";
const hl = urlParams.get('hl');

var firstDate, option;
var highlighter = "";

var faqs = [
  {
    heading: `<h4 slot="heading">Why isn't my plan 12 months?</h4>`,
    content: `<p>All plans in your area end on the same month so its easier for our meter readers to do their job. The duration of your plan will depend on how far you are from that month.</p>`
  },
  {
    heading: `<h4 slot="heading">How did you calculate my monthly payment?</h4>`,
    content: `<p>We use everything we know about your energy consumption to estimate your average usage and charge you a fixed amount every month.</p>`
  },
  {
    heading: `<h4 slot="heading">How could my credit affect my future payments?</h4>`,
    content: `<p>If you’re in credit when you set up a Direct Debit, we’ll offer you two options: </p><ol class="ol-numbered"><li>Take the credit as a refund cheque</li><li>Deduct your credit from the expected cost of your energy</li></ol><p>Taking a refund cheque means we send you the money you have overpaid. To calculate your monthly payments, we divide the expected cost of your energy by the number of months in your plan.</p><p>The second option means that we use the money you have overpaid to reduce your monthly payments over the next 6-12 months. We deduct the credit from your expected energy cost, then divide this reduced amount by the number of months in your plan. This makes your monthly payments smaller.</p><p>It depends on whether you want the money immediately, or you would like to reduce your payments for the length of your plan. One of the potential downsides of reducing your payments with your credit, is that they may increase next year – as there should be no credit to reduce them next time.</p>`
  },
  {
    heading: `<h4 slot="heading">When can I expect my refund?</h4>`,
    content: `<p>Your refund will be processed once you have set up your Direct Debit. This is issued to you in the form of a cheque, and will be with you in the next 10 working days.</p>`
  },
  {
    heading: `<h4 slot="heading">Why are accounts reviewed?</h4>`,
    content: `<p>All plans are reviewed on a periodic basis to ensure that you are paying the right amount based on your energy consumption.</p>`
  }
];

if (date > moment.utc().date()) { firstDate = moment.utc().date(date).format("Do MMMM YYYY"); }
else { firstDate = moment.utc().date(date).add(1, "months").format("Do MMMM YYYY"); }

for (var i = 0; i < 5; i++) {
  if (moment.utc().add(i, 'days').date() == date) {
    firstDate = moment.utc().date(date).add(6, 'days').format("Do MMMM YYYY");
    break;
  }
}

for (var i = 1; i <= moment.utc().endOf('month').date() ; i++) {
  option = document.createElement('option');
  option.value = i;
  option.innerHTML = moment.utc().date(i).format("Do");
  if (document.getElementById('days-of-month')) { document.getElementById('days-of-month').appendChild(option); }
}

if (hl == "info") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="info"><h3 slot="heading">Payment date updated</h3><p>You updated your regular monthly payment date.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
} else if (hl == "success" && type == "energy") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="success"><h3 slot="heading">Account credit refund</h3><p>You have requested your credit be put towards your energy usage.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
} else if (hl == "success" && type == "cheque") {
  highlighter = '<ns-panel><div class="splash"><ns-highlighter type="success"><h3 slot="heading">Account credit refund</h3><p>You have requested a refund by cheque. Your cheque will be processed and sent out within 3-5 working days upon recieving your Direct Debit instruction.</p><p>Please check your updated payment plan below.</p></ns-highlighter></div></ns-panel>';
}

var pt = (type == "cheque") ? 800 : 600;
var rd = (type == "cheque") ? 'You have chosen to recieve the <b>credit balance as a cheque</b>.' : 'Your account credit has been <b>split across the remainder of your plan</b>.';
var cp = (type == "cheque") ? '<b>£200</b> of your account credit will be sent to you as a cheque in the post.' : '<b>£200</b> of your account credit will be put towards your energy usage.';

if (document.getElementById('highlighter-container')) { document.getElementById('highlighter-container').innerHTML = highlighter; }
if (document.getElementById('date')) { document.getElementById('date').innerHTML = moment.utc().date(date).format("Do"); }
if (document.getElementById('refund-description')) { document.getElementById('refund-description').innerHTML = rd; }
if (document.getElementById('credit-paragraph')) { document.getElementById('credit-paragraph').innerHTML = cp; }
if (document.getElementById('plan-total')) { document.getElementById('plan-total').innerHTML = pt; }
if (document.getElementById('first')) { document.getElementById('first').innerHTML = pt / 10; }
if (document.getElementById('monthly')) { document.getElementById('monthly').innerHTML = pt / 10; }
if (document.getElementById('first-date')) { document.getElementById('first-date').innerHTML = firstDate; }
if (document.getElementById('review-date')) { document.getElementById('review-date').innerHTML = moment.utc().add(6, 'months').format("Do MMMM YYYY"); }

if (document.getElementById('change-date')) { document.getElementById('change-date').href = "payment-date.html?date=" + date + "&type=" + type + "&hl=" + hl; }
if (document.getElementById('keep-date')) { document.getElementById('keep-date').href = "index.html?date=" + date + "&type=" + type + "&hl="; }
if (document.getElementById('bank-details')) { document.getElementById('bank-details').href = "bank-details.html?date=" + date + "&type=" + type + "&hl=" + hl; }
if (document.getElementById('refund-options')) { document.getElementById('refund-options').href = "refund.html?date=" + date + "&type=" + type + "&hl=" + hl; }
// if (document.getElementById('complete')) { document.getElementById('complete').href = "confirmation.html?date=" + date + "&type=" + type + "&hl=" + hl; }
