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
      `You have selected a date that falls within the next 5 days. This means your first payment will be taken on ${moment().utc().add(6, "days").format("Do MMMM YYYY")}.`,
      `All future payments will be taken on <span id="selected-date"></span> of each month thereafter, as per your selection.`
    ],
    type: `info`
  }
];
