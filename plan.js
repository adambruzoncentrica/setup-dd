function generatePlan(actions) {
  let pot = document.getElementById('plan-overview-triple');
  while (pot.firstChild) pot.removeChild(pot.firstChild); // Empty the plan overview triple

  for (let i = 0; i < planOverviewCards.length; i++) {
    if (balance == 0 && i === 0) {
      continue;
    }
    let card = nsCard.cloneNode();
    let h3 = h3Heading.cloneNode();
        h3.innerHTML = planOverviewCards[i].heading;
        card.appendChild(h3);

    for (let n = 0; n < planOverviewCards[i].content.all.length; n++) {
      let p = pParagraph.cloneNode();
          p.innerHTML = planOverviewCards[i].content.all[n];
          card.appendChild(p);
    }

    if (balance > 0) {
      for (let n = 0; n < planOverviewCards[i].content[type].length; n++) {
        let p = pParagraph.cloneNode();
            p.innerHTML = planOverviewCards[i].content[type][n];
            card.appendChild(p);
      }
    }

    if (actions) {

      if (planOverviewCards[i].cta) {
        let cta = nsCta.cloneNode();
            cta.innerHTML = planOverviewCards[i].cta.label;
            cta.href = planOverviewCards[i].cta.link + "?" + urlParams.toString();

        card.appendChild(cta);
      }
    }

    pot.appendChild(card);
  }
}
