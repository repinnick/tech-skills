var Documents = /** @class */ (function () {
  function Documents() {}
  return Documents;
})();
var ColorPrint = /** @class */ (function () {
  function ColorPrint() {}
  ColorPrint.prototype.print = function (d) {
    console.log("Цветная печать");
  };
  return ColorPrint;
})();
var BlackWhitePrint = /** @class */ (function () {
  function BlackWhitePrint() {}
  BlackWhitePrint.prototype.print = function (d) {
    console.log("Чёрно-белая печать");
  };
  return BlackWhitePrint;
})();
var Printer = /** @class */ (function () {
  function Printer(printerService) {
    this.printerService = printerService;
  }
  Printer.prototype.print = function (doc) {
    this.printerService.print(doc);
  };
  return Printer;
})();
var doc = new Documents();
var printer = new Printer(new BlackWhitePrint());
var printer2 = new Printer(new ColorPrint());
printer.print(doc);
printer2.print(doc);
