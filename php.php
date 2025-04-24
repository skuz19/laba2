<?php
// Функция проверки циклического сдвига
function isCyclicShift($S, $T) {
    // Проверка длины строк
    if (strlen($S) !== strlen($T)) {
        return false;
    }
    // Конкатенируем строку саму с собой и проверяем наличие подстроки
    $concatenated = $S . $S;
    return strpos($concatenated, $T) !== false;
}

echo "Введите две строки разделенные пробелом: ";
$input = trim(fgets(STDIN)); // Чтение ввода

// Разделение ввода на компоненты
$components = preg_split('/\s+/', $input);

// Проверка количества компонентов
if (count($components) !== 2) {
    fwrite(STDERR, "Введите только две строки\n");
    exit(1);
}

list($S, $T) = $components;

echo isCyclicShift($S, $T) ? "Да\n" : "Нет\n";
?>
