let nsCard = document.createElement('ns-card');
    nsCard.setAttribute('role', "listItem");
    nsCard.setAttribute('type', "support");

let h3Heading = document.createElement('h3');
    h3Heading.setAttribute('slot', "heading");
    h3Heading.setAttribute('role', "heading");
    h3Heading.setAttribute('aria-level', "3");

let pParagraph = document.createElement('p');
    pParagraph.setAttribute('slot', "paragraph");

let nsCta = document.createElement('ns-cta');
    nsCta.setAttribute('slot', "cta");
    nsCta.setAttribute('type', "text");

let planOverviewCards = [
  {
    heading: `Account balance`,
    content: {
      top: [
        `Your account balance is <b><ns-price pence="${balance}"></ns-price> in credit</b>.`
      ],
      energy: [
        `This credit has been put towards <b>your annual energy usage</b>.`
      ],
      cheque: [
        `You have chosen to <b>take this credit as a cheque</b>.`
      ],
      bottom: []
    },
    cta: {
      label: `Refund options`,
      link: `refund.html`
    }
  },
  {
    heading: `Your monthly payments`,
    content: {
      top: [
        `Your <b>first payment</b> of <b><ns-price id="first" pence="${monthly}"></ns-price></b> will be taken on <b id="first-date">` + firstDate + `</b>.`,
        `Then, a further <b>9 regular monthly payments</b> of <b><ns-price id="first" pence="${monthly}"></ns-price></b> will be taken on <b><span id="date">` + moment.utc().date(date).format("Do") + `</span> of each month</b> thereafter.`
      ],
      energy: [],
      cheque: [],
      bottom: []
    },
    cta: {
      label: `Change this date`,
      link: `payment-date.html`
    }
  },
  {
    heading: `Total projected payment`,
    content: {
      top: [
        `By the end of your <b>` + parseInt(term) + `-month plan</b>, we predict your <b>total energy usage</b> will cost <b><ns-price pence="${totalEnergy}"></ns-price></b>.`,
      ],
      energy: [
        `You have chosen to <b>use your credit</b> to pay for your <b>energy usage</b>, therefore you will have paid <b><ns-price id="plan-total" pence="${totalPayment}"></ns-price></b>.`
      ],
      cheque: [
        `You have chosen to <b>take your credit as a cheque</b>, therefore you will have paid <b><ns-price id="plan-total" pence="${totalPayment}"></ns-price></b>.`
      ],
      bottom: []
    }
  }
];
