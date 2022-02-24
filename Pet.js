class Animal {
    constructor(name) {
        this.name = name;
        this.color = 'brown';
        this.eyeColor = 'blue';
        this.sound = 'au miau krimst cypt bul bul aaa! 🐕🐈🐹🦈🐤🐦';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}`);
    }

    introduce() {
        console.log(`${this.name}: eyes - ${this.eyeColor}; fur - ${this.color}; legs - ${this.legs}.`);
    }
}

class Pet extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.sound = 'au miau krimst! 🐕🐈🐹';
        this.legs = 8;
    }
}

class Hamster extends Pet {
    constructor(name) {
        super(name);
        this.color = 'black';
        this.sound = 'krimst krimst! 🐹🐹';
    }

    megaEat() {

    }
}

class Dog extends Pet {
    constructor(name) {
        super(name);
        this.sound = 'au au! 🐕🐕';
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name);
        this.eyeColor = 'red';
        this.sound = 'miau miau! 🐈🐈';
    }
}

const naminukas = new Hamster('Naminukas');
naminukas.introduce();

const kulverstukas = new Dog('Kulverstukas');
kulverstukas.introduce();

const bagyra = new Cat('Bagyra');
bagyra.introduce();