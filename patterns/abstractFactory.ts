interface CarFactory {
    Sedan(): Sedan,
    Coupe(): Coupe,
    Hatchback(): Hatchback,
}
interface Sedan {
    createSedan(): void;
}
interface Coupe{
    createCoupe(): void,
}
interface Hatchback{
    createHatchback(): void,
}

class MersedesFactory implements CarFactory {
    public Sedan(): Sedan {
        return new MersedesSedan();
    }
    public Coupe(): Coupe {
        return new MersedesCoupe();
    }
    public Hatchback(): Hatchback {
        return new MersedesHatchback();
    }
}

class RenoFactory implements CarFactory {
    public Sedan(): Sedan {
        return new RenoSedan();
    }
    public Coupe(): Coupe {
        return new RenoCoupe();
    }
    public Hatchback(): Hatchback {
        return new RenoHatchback();
    }
}

class MersedesSedan implements Sedan {
    createSedan() {
        console.log('created Mersedes Sedan')
    };
}
class MersedesCoupe implements Coupe {
    createCoupe() {
        console.log('created Mersedes Coupe')
    };
}
class MersedesHatchback implements Hatchback {
    createHatchback() {
        console.log('created Mersedes Hatchback')
    };
}

class RenoSedan implements Sedan {
    createSedan() {
        console.log('created Reno Sedan')
    };
}
class RenoCoupe implements Coupe {
    createCoupe() {
        console.log('created Reno Coupe')
    };
}
class RenoHatchback implements Hatchback {
    createHatchback() {
        console.log('created Reno Hatchback')
    };
}

let mersedes = new MersedesFactory();
mersedes.Sedan().createSedan()
mersedes.Hatchback().createHatchback()
mersedes.Coupe().createCoupe()

let reno = new RenoFactory();
reno.Sedan().createSedan()
reno.Hatchback().createHatchback()
reno.Coupe().createCoupe()

