class System {
    constructor(public text: string){   
        this.text = this.text.replace(/[&\/\\#,@|+()$~%.'":*?<>{}]/g, '');
    }
    public getProcessedText(process: any): string {
        return process.processTest(this.text)
        // вывести слова в порядке убывания их частоты в тексте
    }
}

interface TextProcessor {
    processTest(text: string): void;
}

interface wordDictInterface {
    key: string,
    value: number;
}

class WordCounter {
    countWords(text: string) { //считает все слова в тексте и их количество
        return text.split(" ").length;
    }
    getCount(text: string, word: string){ // количество раз, сколько встретилось слово в тексте
        let obj = this.getAllWords(text);
        if(obj.hasOwnProperty(word)) return obj[word];
    } 
    getAllWords(text: string){ // все слова и количество раз, которые они встретились в тексте
        let objects = {};
        for (let word of text.split(" ")) {
            if (!objects.hasOwnProperty(word)){
                objects[word] = 1;
            } else {
                objects[word]++;
            }
        }
        return objects;
    }
}

// написать адапер для word counter, который подойдёт для class System

class WordCounterAdapter implements TextProcessor{
    constructor(private adapter: any){}
    processTest(text: string): string[] {
        this.adapter.countWords(text);
        const words = Object.keys(this.adapter.getAllWords(text));
        return words.sort((word1, word2) => +this.adapter.getCount(text, word2) - +this.adapter.getCount(text, word1))
    }
}

let text: string = "Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. Take our free online English test to find out which level to choose. Select your level, from beginner (CEFR level A1) to advanced (CEFR level C1), and improve your reading skills at your own speed, whenever it's convenient for you."
const counter = new WordCounter;
const adapter = new WordCounterAdapter(counter);
const systems = new System(text)
console.log(systems.getProcessedText(adapter));
