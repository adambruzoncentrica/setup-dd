function generatePlan(actions) {
  var pot = document.getElementById('plan-overview-triple');
  while (pot.firstChild) pot.removeChild(pot.firstChild); // Empty the plan overview triple

  for (var i = 0; i < planOverviewCards.length; i++) {
    if (balance == 0 && i === 0) {
      continue;
    }
    var card = nsCard.cloneNode();
    var h3 = h3Heading.cloneNode();
        h3.innerHTML = planOverviewCards[i].heading;
        card.appendChild(h3);

    for (var n = 0; n < planOverviewCards[i].content[type].length; n++) {
      var p = pParagraph.cloneNode();
          p.innerHTML = planOverviewCards[i].content[type][n];
          card.appendChild(p);
    }

    if (actions) {
      if (planOverviewCards[i].cta) {
        var cta = nsCta.cloneNode();
            cta.innerHTML = planOverviewCards[i].cta.label;
            cta.href = planOverviewCards[i].cta.link + "?" + urlParams.toString();
      }

      card.appendChild(cta);
    }

    pot.appendChild(card);
  }
}
