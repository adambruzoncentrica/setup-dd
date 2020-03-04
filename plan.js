function generatePlanCards(cardsJSON, actionsFlag) {

  let cards = [];

  for (let i = 0; i < cardsJSON.length; i++) {
    if (balance == 0 && i === 0) {
      continue;
    }

    let heading = cardsJSON[i].heading;
    let paragraphs = [];
    let cta;

    for (let n = 0; n < cardsJSON[i].paragraphs.top.length; n++) {
      paragraphs.push(cardsJSON[i].paragraphs.top[n]);
    }

    if (balance > 0) {
      for (let n = 0; n < cardsJSON[i].paragraphs[refundType].length; n++) {
        paragraphs.push(cardsJSON[i].paragraphs[refundType][n]);
      }
    }

    for (let n = 0; n < cardsJSON[i].paragraphs.bottom.length; n++) {
      paragraphs.push(cardsJSON[i].paragraphs.bottom[n]);
    }

    if (actionsFlag && cardsJSON[i].cta) {
      cta = generateCta(cardsJSON[i].cta.link, cardsJSON[i].cta.label);
    }

    let card = generateCard(heading, paragraphs, cta, "support");

    cards.push(card);

  }

  return cards;

}
