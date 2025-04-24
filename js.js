// Функция проверки циклического сдвига
function isCyclicShift(S, T) {
    // Если длины строк разные, возвращаем false
    if (S.length !== T.length) {
        return false;
    }
    // Конкатенируем строку саму с собой и проверяем наличие подстроки
    const concatenated = S + S;
    return concatenated.includes(T);
}

console.log("Введите две строки разделенные пробелом:");

// Чтение ввода
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    // Разделение ввода на компоненты
    const components = input.trim().split(/\s+/);
    
    // Проверка количества компонентов
    if (components.length !== 2) {
        console.error("Введите только две строки");
        rl.close();
        return;
    }
    
    const [S, T] = components;
    
    // Вывод результата
    console.log(isCyclicShift(S, T) ? "Да" : "Нет");
    rl.close();
});
