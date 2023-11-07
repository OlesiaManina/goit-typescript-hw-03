
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[];

    constructor() {
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(newKey: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
        this.door = false;
    }

    openDoor(newKey: Key): void {
        if (newKey.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};