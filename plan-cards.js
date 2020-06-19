let planCardsJSON = [
  {
    heading: `Account balance`,
    paragraphs: {
      top: {
        credit: [`Your account balance is <b><ns-price pence="${Math.abs(balance)}"></ns-price> in credit</b>.`],
        debit: [`Your account balance is <b><ns-price pence="${Math.abs(balance)}"></ns-price> in debt</b>.`]
      },
      energy: [`This credit has been put towards <b>your annual energy usage during the plan duration</b>.`],
      cheque: [`You have chosen to <b>take this credit as a cheque</b>.`],
      debit: [`This amount has been <b>spread across your plan</b> so you don't have to pay it all in one go.`],
      bottom: {
        credit: [],
        debit: []
      }
    },
    cta: {
      credit: {
        label: `Refund options`,
        link: `refund.html`
      },
      debit: {
        label: `Make a payment`,
        link: `#`
      }
    }
  },
  {
    heading: `Your monthly payments`,
    paragraphs: {
      top: [
        `Your <b>first payment</b> of <b><ns-price pence="${monthlyPrice}"></ns-price></b> will be taken on <b id="first-date">` + firstDate + `</b>.`,
        `Thereafter, <b>regular monthly payments</b> of <b><ns-price pence="${monthlyPrice}"></ns-price></b> will be taken on <b><span id="date">` + moment.utc().date(paymentDate).format("Do") + `</span> of each month</b> thereafter.`
      ],
      energy: [],
      cheque: [],
      debit: [],
      bottom: []
    },
    cta: {
      label: `Change this date`,
      link: `payment-date.html`
    }
  },
  {
    heading: `Total projected payment`,
    paragraphs: {
      top: [`By the end of your payment plan, we predict your <b>total energy usage</b> will cost <b><ns-price pence="${totalEnergy}"></ns-price></b>.`,],
      energy: [`You have chosen to <b>use your credit</b> to pay for your <b>energy usage</b>, therefore you will have paid <b><ns-price id="plan-total" pence="${totalPayment}"></ns-price></b>.`],
      cheque: [`You have chosen to <b>take your credit as a cheque</b>, therefore you will have paid <b><ns-price id="plan-total" pence="${totalPayment}"></ns-price></b>.`],
      debit: [`With the <b>account debt added</b> to the predicted energy usage, your total payments will come to <b><ns-price id="plan-total" pence="${totalPayment}"></ns-price></b>.`],
      bottom: []
    }
  }
];
