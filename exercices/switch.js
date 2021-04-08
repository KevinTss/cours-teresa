/*
Intervertir deux variables
*/

var boite_1 = "A";
var boite_2 = "B";

var boite_3 = boite_1;
boite_1 = boite_2;
boite_2 = boite_3;

console.log("Boite 1: ", boite_1); // contenu de la boite 2
console.log("Boite 2: ", boite_2); // contenu de la boite 1
