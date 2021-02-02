import "./styles/index.sass";

import Typewriter from "typewriter-effect/dist/core";

import TextScramble from "./utils/scramble";

const phrases = [
  "Zukov &#10084;&#65039;",
  "Encode text!",
  "Decode text ...",
  "For Alekseev labs",
  "that there's a difference",
  "between knowing the path",
  "and walking the path",
];

const el = document.querySelector(".title");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();

var input = document.getElementById("typewriter");

var customNodeCreator = function (character) {
  // Add character to input placeholder
  input.placeholder = input.placeholder + character;

  // Return null to skip internal adding of dom node
  return null;
};

var onRemoveNode = function ({ character }) {
  if (input.placeholder) {
    // Remove last character from input placeholder
    input.placeholder = input.placeholder.slice(0, -1);
  }
};

var typewriter = new Typewriter(null, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
  onRemoveNode: onRemoveNode,
});

// typewriter.typeString("Type something to encode").pauseFor(300).start();
