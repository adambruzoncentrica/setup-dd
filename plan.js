function generatePlanCards(cardsJSON, actionsFlag) {

  let cards = [];

  for (let i = 0; i < cardsJSON.length; i++) {
    if (balance == 0 && i === 0) {
      continue;
    }

    let heading = cardsJSON[i].heading;
    let paragraphs = [];
    let cta;

    let pTop = (cardsJSON[i].paragraphs.top[accountStatus]) ? cardsJSON[i].paragraphs.top[accountStatus] : cardsJSON[i].paragraphs.top ;
    let pType = (cardsJSON[i].paragraphs[refundType]) ? cardsJSON[i].paragraphs[refundType] : cardsJSON[i].paragraphs[accountStatus] ;
    let pBottom = (cardsJSON[i].paragraphs.bottom[accountStatus]) ? cardsJSON[i].paragraphs.bottom[accountStatus] : cardsJSON[i].paragraphs.bottom ;

    let action;
    if (cardsJSON[i].cta) {
      action = (cardsJSON[i].cta[accountStatus]) ? cardsJSON[i].cta[accountStatus] : cardsJSON[i].cta ;
    }

    for (let n = 0; n < pTop.length; n++) {
      paragraphs.push(pTop[n]);
    }

    for (let n = 0; n < pType.length; n++) {
      paragraphs.push(pType[n]);
    }

    for (let n = 0; n < pBottom.length; n++) {
      paragraphs.push(pBottom[n]);
    }

    if (actionsFlag && action) {
      cta = generateCta(action.link, action.label);
    }

    let card = generateCard(heading, paragraphs, cta, "support");

    cards.push(card);

  }

  return cards;

}
