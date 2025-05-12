// Проверка латинской буквы
function latin(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

// Проверка условия
function pangram(sentence) {
    const letters = new Set();
    for (const c of sentence) {
        if (latin(c)) {
            letters.add(c.toLowerCase());
        }
    }
    return letters.size === 26;
}

// Проверка символа на пунктуацию
function isPunctuation(c) {
    const punctuation = '.,;:!?"\'()-';
    return punctuation.includes(c);
}

const input = prompt("Введите строку:");

// Проверка на наличие нелатинских символов
let noLatin = false;
for (const c of input) {
    if (!latin(c) && !/\s/.test(c) && !isPunctuation(c)) {
        noLatin = true;
        break;
    }
}

if (noLatin) {
    console.log("Ошибка: введите только латинские буквы");
    process.exit(1);
}

const result = pangram(input);
console.log(result ? "true" : "false");
