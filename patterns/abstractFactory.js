var MersedesFactory = /** @class */ (function () {
    function MersedesFactory() {
    }
    MersedesFactory.prototype.Sedan = function () {
        return new MersedesSedan();
    };
    MersedesFactory.prototype.Coupe = function () {
        return new MersedesCoupe();
    };
    MersedesFactory.prototype.Hatchback = function () {
        return new MersedesHatchback();
    };
    return MersedesFactory;
}());
var RenoFactory = /** @class */ (function () {
    function RenoFactory() {
    }
    RenoFactory.prototype.Sedan = function () {
        return new RenoSedan();
    };
    RenoFactory.prototype.Coupe = function () {
        return new RenoCoupe();
    };
    RenoFactory.prototype.Hatchback = function () {
        return new RenoHatchback();
    };
    return RenoFactory;
}());
var MersedesSedan = /** @class */ (function () {
    function MersedesSedan() {
    }
    MersedesSedan.prototype.createSedan = function () {
        console.log('created Mersedes Sedan');
    };
    ;
    return MersedesSedan;
}());
var MersedesCoupe = /** @class */ (function () {
    function MersedesCoupe() {
    }
    MersedesCoupe.prototype.createCoupe = function () {
        console.log('created Mersedes Coupe');
    };
    ;
    return MersedesCoupe;
}());
var MersedesHatchback = /** @class */ (function () {
    function MersedesHatchback() {
    }
    MersedesHatchback.prototype.createHatchback = function () {
        console.log('created Mersedes Hatchback');
    };
    ;
    return MersedesHatchback;
}());
var RenoSedan = /** @class */ (function () {
    function RenoSedan() {
    }
    RenoSedan.prototype.createSedan = function () {
        console.log('created Reno Sedan');
    };
    ;
    return RenoSedan;
}());
var RenoCoupe = /** @class */ (function () {
    function RenoCoupe() {
    }
    RenoCoupe.prototype.createCoupe = function () {
        console.log('created Reno Coupe');
    };
    ;
    return RenoCoupe;
}());
var RenoHatchback = /** @class */ (function () {
    function RenoHatchback() {
    }
    RenoHatchback.prototype.createHatchback = function () {
        console.log('created Reno Hatchback');
    };
    ;
    return RenoHatchback;
}());
var mersedes = new MersedesFactory();
mersedes.Sedan().createSedan();
mersedes.Hatchback().createHatchback();
mersedes.Coupe().createCoupe();
var reno = new RenoFactory();
reno.Sedan().createSedan();
reno.Hatchback().createHatchback();
reno.Coupe().createCoupe();
