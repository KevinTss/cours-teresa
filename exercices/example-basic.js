var nom = "teresa";
var age = 25;

// je créer une autre boite et je met teresa en attendant dans cette nouvelle boite
var nom2 = age;
// je prend 25 que je met dans nom
age = nom;
// Je reprend teresa que je met age
nom = nom2;

console.log("nom ->", nom); // 25
console.log("age ->", age); // teresa
