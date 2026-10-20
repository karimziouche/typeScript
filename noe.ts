interface AnimauxAvecPattes {
  nombeDePattes: 4;
}

interface AnimauxDeCouleurNoir {
  couleur : "Noir";
}

class Insecte {
  name: string = "Asticot";
}

class Moustique extends Insecte {
  name: string = "Moustique";
}

class Animaux {
  name: string = "Animaux"; 
}

class Chat extends Animaux implements AnimauxAvecPattes {
  couleur: string;
  nombeDePattes: 4 = 4;
 
  constructor(name: string, couleur: string) {
    super();
    this.name = name;
    this.couleur = couleur;
  }
}
const chat1 = new Chat("Chat européen", "Noir");
const chat2 = new Chat("Chat chartreux", "blanc");

console.log(chat1.name);
console.log(chat2.name);


class Chien extends Animaux implements AnimauxAvecPattes {
  couleur: string;
  nombeDePattes: 4 = 4;

  constructor(name: string, couleur: string) {
    super();
    this.name = name;
    this.couleur = couleur;
  }
}
const chien1 = new Chien("Chien Terre-Neuve","Noir");
const chien2 = new Chien("Chien Moon Moon", "blanc");

console.log(chien1.name);
console.log(chien2.name);

class Oiseau extends Animaux {
  couleur: string;

  constructor(name: string, couleur: string) {
    super();
    this.name = name;
    this.couleur = couleur;
  }
}
const oiseau1 = new Oiseau("Mésange", "blanc");
const oiseau2 = new Oiseau("Merle", "Noir");

console.log(oiseau1.name);
console.log(oiseau2.name);

class Poisson extends Animaux {
  constructor(name: string) {
    super();
    this.name = name;
  }
}
const poisson1 = new Poisson("Thon");
const poisson2 = new Poisson("Requin");

console.log(poisson1.name);
console.log(poisson2.name);

function regarderAvecUneLoupe(insecte: Insecte) {
  console.log("Quel joli insecte !");
}

function ecraser(moustique: Moustique) {
  console.log("Zut il est collé sur ma main maintenant...");
}

function photographier(animaux: Animaux) {
  console.log("On peut photographier tous les animaux");
}

function miauler(chat: Chat) {
  console.log("Tous les chats peuvent miauler");
}

function aboyer(chien: Chien) {
  console.log("Tous les chiens peuvent aboyer");
}

function voler(oiseau: Oiseau) {
  console.log("Tous les oiseaux peuvent voler");
}

function nager(poisson: Poisson) {
  console.log("Tous les poissons peuvent nager");
}

function caresser(animaux: AnimauxAvecPattes) {
  console.log("On peut caresser tous les animaux à 4 pattes");
}

function estNoir(
  animaux: { couleur: string }
): animaux is { couleur: "Noir" } {
  return animaux.couleur === "Noir"
}

function nourrir(animaux: AnimauxDeCouleurNoir) {
  console.log("On peut nourrir tous les animaux de couleur noir")
}

if (estNoir(chat1)) {
  nourrir(chat1);
}

if (estNoir(chien1)) {
  nourrir(chien1);
}

if (estNoir(oiseau2)) {
  nourrir(oiseau2);
}