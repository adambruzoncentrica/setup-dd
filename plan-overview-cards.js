var nsCard = document.createElement('ns-card');
    nsCard.setAttribute('role', "listItem");
    nsCard.setAttribute('type', "support");

var h3Heading = document.createElement('h3');
    h3Heading.setAttribute('slot', "heading");
    h3Heading.setAttribute('role', "heading");
    h3Heading.setAttribute('aria-level', "3");

var pParagraph = document.createElement('p');
    pParagraph.setAttribute('slot', "paragraph");

var nsCta = document.createElement('ns-cta');
    nsCta.setAttribute('slot', "cta");
    nsCta.setAttribute('type', "text");

var planOverviewCards = [
  {
    heading: `Account balance`,
    content: {
      energy: [
        `Your account balance is <b>£` + balance.toFixed(2) + ` in credit</b>.`,
        `This credit has been put towards <b>your annual energy usage</b>.`
      ],
      cheque: [
        `Your account balance is <b>£` + balance.toFixed(2) + ` in credit</b>.`,
        `This credit has been put towards <b>your annual energy usage</b>.`
      ]
    },
    cta: {
      label: `Refund options`,
      link: `refund.html`
    }
  },
  {
    heading: `Your monthly payments`,
    content: {
      energy: [
        `Your <b>first payment</b> of <b>£<span id="first">`+ parseFloat((total - balance) / term).toFixed(2) +`</span></b> will be taken on <b id="first-date">` + firstDate + `</b>.`,
        `Then, a further <b>9 regular monthly payments</b> of <b>£<span id="monthly">`+ parseFloat((total - balance) / term).toFixed(2) +`</span></b> will be taken on <b><span id="date">` + moment.utc().date(date).format("Do") + `</span> of each month</b> thereafter.`
      ],
      cheque: [
        `Your <b>first payment</b> of <b>£<span id="first">`+ parseFloat((total - balance) / term).toFixed(2) +`</span></b> will be taken on <b id="first-date">` + firstDate + `</b>.`,
        `Then, a further <b>9 regular monthly payments</b> of <b>£<span id="monthly">`+ parseFloat((total - balance) / term).toFixed(2) +`</span></b> will be taken on <b><span id="date">` + moment.utc().date(date).format("Do") + `</span> of each month</b> thereafter.`
      ]
    },
    cta: {
      label: `Change this date`,
      link: `payment-date.html`
    }
  },
  {
    heading: `Total projected payment`,
    content: {
      energy: [
        `By the end of your <b>` + parseInt(term) + `-month plan</b>, we predict your <b>total energy usage</b> will cost <b>£` + total.toFixed(2) + `</b>.`,
        `You have chosen to <b>use your credit</b> to pay for your <b>energy usage</b>, therefore you will have paid <b>£<span id="plan-total">` + parseFloat(total - balance).toFixed(2) + `</span></b>.`
      ],
      cheque: [
        `By the end of your <b>` + parseInt(term) + `-month plan</b>, we predict your <b>total energy usage</b> will cost <b>£` + total.toFixed(2) + `</b>.`,
        `You have chosen to <b>use your credit</b> to pay for your <b>energy usage</b>, therefore you will have paid <b>£<span id="plan-total">` + parseFloat(total - balance).toFixed(2) + `</span></b>.`
      ]
    }
  }
];
