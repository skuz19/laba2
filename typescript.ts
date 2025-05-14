// Функция для проверки условия
function validtime(num: number): boolean {
    // Перебираем все возможные позиции для вставки ':'
    for (let divider = 1; divider <= 1000; divider *= 10) {
        // Делим число на часы и минуты
        const hours = Math.floor(num / divider);
        const minutes = num % divider;

        // Проверка чисел часов и минут
        if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
            // Проверка на корректное количество цифр в минутах
            if ((divider === 1 && minutes < 10) ||    // Для формата X:Y
                (divider === 10 && minutes < 100) ||  // Для формата XX:YY
                (divider === 100 && minutes < 1000) || // Для формата X:YYY
                (divider === 1000)) {                 // Для формата XX:YYY
                return true;
            }
        }
    }
    return false;
}

// Асинхронная функция для ввода с консоли
async function readInput(promptText: string): Promise<number> {
    const input = window.prompt(promptText);
    return parseInt(input || "0");
}

// Основная функция
async function main() {
    // Ввод количества чисел
    const n = await readInput("Введите количество чисел");
    const results: string[] = [];

    // Ввод и обработка каждого числа
    for (let i = 0; i < n; i++) {
        const num = await readInput(`Введите число #${i + 1}`);
        results.push(validtime(num) ? "YES" : "NO");
    }

    // Вывод результатов
    console.log("Результаты:");
    console.log(results.join(" "));
}

main().catch(err => console.error("Ошибка:", err));
