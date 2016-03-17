console.log("data.js loaded");

// Dramatis Personae
var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Strider",
  "Boromir",
  "Gimli"
];

var lands = [
  "The Shire",
  "Rivendell",
  "Mordor"
];

var nazgulScreech = function (){
  // jQuery doesn't have a play() method, so vanilla js it is!
  document.querySelector("#nazgul-screech").play();

  // Also console.log, so you can test without annoying everyone.
  console.log("Nazgul: KHRAAAAAAAAAA!");
}
