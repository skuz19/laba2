// функция для проверки условия
function validtime(num) {
    // перебираем все возможные позиции для вставки ':'
    for (let divider = 1; divider <= 1000; divider *= 10) {
        // делим число на часы и минуты
        const hours = Math.floor(num / divider);
        const minutes = num % divider;

        // проверка чисел часов и минут
        if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
            // проверка на корректное количество цифр в минутах
            if ((divider === 1 && minutes < 10) ||    // для формата X:Y
                (divider === 10 && minutes < 100) ||    // для формата XX:YY
                (divider === 100 && minutes < 1000) ||    // для формата X:YYY
                (divider === 1000)) {    // для формата XX:YYY
                return true; // возвращаем true если все условия выполнены
            }
        }
    }
    return false;
}

// основной код программы
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// переменная для хранения количества чисел
console.log("Введите количество чисел");
readline.question('', n => {
    // Цикл для обработки каждого числа
    const processNumber = (i) => {
        if (i < parseInt(n)) {
            // переменная для хранения текущего числа
            console.log("Введите число");
            readline.question('', num => {
                if (validtime(parseInt(num))) {
                    process.stdout.write("YES ");
                } else {
                    process.stdout.write("NO ");
                }
                processNumber(i + 1);
            });
        } else {
            console.log(); // Перевод строки после вывода всех результатов
            readline.close();
        }
    };
    processNumber(0);
});
