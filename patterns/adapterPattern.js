var System = /** @class */ (function () {
  function System(text) {
    this.text = text;
    this.text = this.text.replace(/[&\/\\#,@|+()$~%.'":*?<>{}]/g, "");
  }
  System.prototype.getProcessedText = function (process) {
    return process.processTest(this.text);
    // вывести слова в порядке убывания их частоты в тексте
  };
  return System;
})();
var WordCounter = /** @class */ (function () {
  function WordCounter() {}
  WordCounter.prototype.countWords = function (text) {
    return text.split(" ").length;
  };
  WordCounter.prototype.getCount = function (text, word) {
    var obj = this.getAllWords(text);
    if (obj.hasOwnProperty(word)) return obj[word];
  };
  WordCounter.prototype.getAllWords = function (text) {
    var objects = {};
    for (var _i = 0, _a = text.split(" "); _i < _a.length; _i++) {
      var word = _a[_i];
      if (!objects.hasOwnProperty(word)) {
        objects[word] = 1;
      } else {
        objects[word]++;
      }
    }
    return objects;
  };
  return WordCounter;
})();
// написать адапер для word counter, который подойдёт для class System
var WordCounterAdapter = /** @class */ (function () {
  function WordCounterAdapter(adapter) {
    this.adapter = adapter;
  }
  WordCounterAdapter.prototype.processTest = function (text) {
    var _this = this;
    this.adapter.countWords(text);
    var words = Object.keys(this.adapter.getAllWords(text));
    return words.sort(function (word1, word2) {
      return (
        +_this.adapter.getCount(text, word2) -
        +_this.adapter.getCount(text, word1)
      );
    });
  };
  return WordCounterAdapter;
})();
var text =
  "Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it's convenient for you.";
var counter = new WordCounter();
var adapter = new WordCounterAdapter(counter);
console.log(counter.getAllWords(text));
var systems = new System(text);
console.log(systems.getProcessedText(adapter));
