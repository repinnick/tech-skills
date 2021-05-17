class Documents{}

interface PrinterService {
    print(d: Documents): void;
}

class ColorPrint implements PrinterService {
    print(d: Documents): void {
        console.log('Цветная печать')
    }
}
class BlackWhitePrint implements PrinterService {
    print(d: Documents): void {
        console.log('Чёрно-белая печать');
    }
}

class Printer {
    constructor(private printerService: PrinterService) {}
    print(doc: Documents) {
        this.printerService.print(doc);
    }
}

const doc = new Documents();
const printer = new Printer(new BlackWhitePrint)
const printer2 = new Printer(new ColorPrint);
printer.print(doc);
printer2.print(doc);