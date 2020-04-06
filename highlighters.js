let highlighters = [
  {
    heading: `Payment date updated`,
    content: [
      `You updated your regular monthly payment date.`,
      `Please check your updated payment plan below.`
    ],
    type: `info`
  },
  {
    heading: `Your bank details seem to be incorrect`,
    content: [
      `We have checked the bank details you provided and they appear to be incorrect.`,
      `Please check them and try to submit again.`
    ],
    type: `error`
  },
  {
    heading: `Refund option updated`,
    content: [
      `You have requested your credit be put towards your energy usage.`,
      `Please check your updated payment plan below.`
    ],
    type: `success`
  },
  {
    heading: `Refund option updated`,
    content: [
      `You have requested a refund by cheque. Your cheque will be processed and sent out within 3-5 working days upon receiving your Direct Debit instruction.`,
      `Please check your updated payment plan below.`
    ],
    type: `success`
  },
  {
    heading: `Payment date selection`,
    content: [
      `We need 5 days to set up this payment with your bank. This means your <b>first payment</b> will be taken on <b>${moment().utc().add(6, "days").format("Do MMMM YYYY")}</b>.`,
      `All future payments will be taken on <b><span id="selected-date"></span></b> of <b>each month</b> thereafter.`
    ],
    type: `info`
  },
  {
    heading: `Payment successful`,
    content: [
      `Your payment of <b><ns-price pence="${paymentAmount}"></ns-price></b> has been received.`,
      `Your account balance and plan have been adjusted below.`
    ],
    type: `success`
  }
];
