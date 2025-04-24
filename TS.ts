// Функция проверки циклического сдвига с типами
function isCyclicShift(S: string, T: string): boolean {
    // Если длины строк разные, возвращаем false
    if (S.length !== T.length) {
        return false;
    }
    // Конкатенируем строку саму с собой и проверяем наличие подстроки
    const concatenated = S + S;
    return concatenated.includes(T);
}

function main(): void {
    console.log("Введите две строки разделенные пробелом:");
    
    // Чтение ввода
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input: string) => {
        // Разделение ввода на компоненты
        const components = input.trim().split(/\s+/);
        
        // Проверка количества компонентов
        if (components.length !== 2) {
            console.error("Введите только две строки");
            rl.close();
            process.exit(1);
        }
        
        const [S, T] = components;
        

        console.log(isCyclicShift(S, T) ? "Да" : "Нет");
        rl.close();
    });
}

// Вызов функции
main();
