class Dog {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.legs = 4;
        this.fur = kailis ?? 'black';
    }

    voice() {
        console.log(`${this.name}: Au au!! As turiu ${this.legs} kojas.`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and my fur is ${this.fur} color.`);
    }
}

class Cat {
    constructor(vardas, kailis) {
        this.name = vardas;
        this.legs = 4;
        this.fur = kailis ?? 'black';
    }

    voice() {
        console.log(`${this.name}: Miau miau!! As turiu ${this.legs} kojas.`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and my fur is ${this.fur} color.`);
    }
}

const rex = new Dog('Rex', 'brown');
const spaikas = new Dog('Spaikas', 'white');
const brisius = new Dog('Brisius');

console.log(rex);
console.log(rex.name);
rex.voice();
rex.introduce();

console.log(spaikas);
console.log(spaikas.name);
spaikas.voice();
spaikas.introduce();

console.log(brisius);
console.log(brisius.name);
brisius.voice();
brisius.introduce();




const pukis = new Cat('Pukis', 'white');
const rainis = new Cat('Rainis', 'grey');

console.log(pukis);
console.log(pukis.name);
pukis.voice();
pukis.introduce();

console.log(rainis);
console.log(rainis.name);
rainis.voice();
rainis.introduce();
