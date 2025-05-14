<?php
// функция для проверки условия
function validate($num) {
    // перебираем все возможные позиции для вставки ':'
    for ($divider = 1; $divider <= 1000; $divider *= 10) {
        // делим число на часы и минуты
        $hours = intval($num / $divider);
        $minutes = $num % $divider;

        // проверка чисел часов и минут
        if ($hours >= 0 && $hours <= 23 && $minutes >= 0 && $minutes <= 59) {
            // проверка на корректное количество цифр в минутах
            if (($divider == 1 && $minutes < 100) || // для формата X:Y
                ($divider == 10 && $minutes < 100) || // для формата XX:YY
                ($divider == 100 && $minutes < 1000) || // для формата X:YYY
                ($divider == 1000)) {
                return true; // возвращаем true если все условия выполнены
            }
        }
    }
    return false;
}

echo "Введите количество чисел\n";
$n = intval(trim(fgets(STDIN))); // ввод количества чисел

// Цикл для обработки каждого числа
for ($i = 0; $i < $n; $i++) {
    echo "Введите число\n";
    $num = intval(trim(fgets(STDIN))); // Считывание числа

    if (validate($num)) {
        echo "YES ";
    } else {
        echo "NO ";
    }

    echo "\n";
}
?>
