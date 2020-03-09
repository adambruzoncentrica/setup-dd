// Nuked HTML
function createH2() {
  let h2Heading = document.createElement('h2');
  h2Heading.setAttribute('slot', "heading");
  h2Heading.setAttribute('role', "heading");
  h2Heading.setAttribute('aria-level', "2");
  return h2Heading;
}

function createH3() {
  let h3Heading = document.createElement('h3');
  h3Heading.setAttribute('slot', "heading");
  h3Heading.setAttribute('role', "heading");
  h3Heading.setAttribute('aria-level', "3");
  return h3Heading;
}

function createH4() {
  let h4Heading = document.createElement('h4');
  h4Heading.setAttribute('slot', "heading");
  h4Heading.setAttribute('role', "heading");
  h4Heading.setAttribute('aria-level', "4");
  return h4Heading;
}

function createP(slot) {
  let pParagraph = document.createElement('p');
  if (slot) { pParagraph.setAttribute('slot', slot); }
  return pParagraph;
}

// Nucleus elements
function createNsPanel() {
  let nsPanel = document.createElement('ns-panel');
  return nsPanel;
}

function createNsCard() {
  let nsCard = document.createElement('ns-card');
  nsCard.setAttribute('role', "listItem");
  nsCard.setAttribute('type', "support");
  return nsCard;
}

function createNsHighlighter(type) {
  let nsHighlighter = document.createElement('ns-highlighter');
  nsHighlighter.setAttribute('type', (type) ? type : "info");
  return nsHighlighter;
}

function createNsCta(type) {
  let nsCta = document.createElement('ns-cta');
  nsCta.setAttribute('slot', "cta");
  nsCta.setAttribute('type', (type) ? type : "direct");
  return nsCta;
}

function createNsExpander(heading, nsContent) {
  let expander = document.createElement('ns-expander');
  let h4 = createH4();
      h4.innerHTML = heading;
  expander.appendChild(h4);

  expander.appendChild(nsContent);
  return expander;
}

function createNsAccordion() {
  let accordion = document.createElement('ns-accordion');
  return accordion;
}


// Nuked functions
function generateTriple(/* nsCards[][, layout] */) {

  let layout = (arguments[1]) ? arguments[1] : "splash";

  let triple = document.createElement('div');
      triple.setAttribute('class', layout + " " + "triple");
      triple.setAttribute('role', "list");

  for (var i = 0; i < arguments[0].length; i++) {
    triple.appendChild(arguments[0][i]);
  }

  return triple;
}

function generateCard(/* heading, paragraphs[], nsCta, type */) {

  let type = (arguments[(arguments.length - 1)]) ? arguments[(arguments.length - 1)] : "support";

  let card = createNsCard();

  let h3 = createH3();
  h3.innerHTML = arguments[0];

  card.appendChild(h3);

  for (let i = 0; i < arguments[1].length; i++) {
    let p = createP("paragraph");
    p.innerHTML = arguments[1][i];
    card.appendChild(p);
  }

  if (arguments[2]) {
    card.appendChild(arguments[2]);
  }
  return card;
}

function generateHighlighter(/* heading, paragraph[, paragraph, ...], type */) {

  let type = (arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : "info";

  let highlighter = createNsHighlighter(type);

  let h2 = createH2();
  h2.innerHTML = arguments[0];

  highlighter.appendChild(h2);

  for (let i = 0; i < arguments[1].length; i++) {
    let p = createP();
    p.innerHTML = arguments[1][i];
    highlighter.appendChild(p);
  }

  return highlighter;

}

function generatePanel(layout, content) {

  let panel = createNsPanel();
  layout = (layout) ? layout : "splash" ;

  layoutContainer = document.createElement('div');
  layoutContainer.setAttribute('class', layout);

  if (content) {

  }

  panel.appendChild(layoutContainer);

  return panel;

}

function generateFaqs(/* nsExpanders[] */) {

  let accordion = createNsAccordion();

  let h3 = createH3();
      h3.innerHTML = "Frequently asked questions"
      accordion.appendChild(h3);

  for (let i = 0; i < arguments[0].length; i++) {
    accordion.appendChild(arguments[0][i]);
  }

  return accordion;
}

function generateCta(/* link, text */) {
  let cta = createNsCta("text");
  cta.setAttribute('href', arguments[0]);
  cta.innerHTML = arguments[1];
  return cta;
}
