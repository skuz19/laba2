import java.util.Scanner

// функция для проверки условия
fun ValidTime(num: Int): Boolean {
    // перебираем все возможные позиции для вставки ':'
    var divider = 1
    while (divider <= 1000) {
        // делим число на часы и минуты
        val hours = num / divider
        val minutes = num % divider

        // проверка чисел часов и минут
        if (hours in 0..23 && minutes in 0..59) {
            // проверка на корректное количество цифр в минутах
            when {
                // для формата X:Y (1 цифра в минутах)
                divider == 1 && minutes < 10 -> return true
                // для формата XX:YY (2 цифры)
                divider == 10 && minutes < 100 -> return true
                // для формата X:YYY (3 цифры)
                divider == 100 && minutes < 1000 -> return true
                // для формата XX:YYY (4 цифры)
                divider == 1000 -> return true
            }
        }
        divider *= 10
    }
    return false
}

fun main() {
    val scanner = Scanner(System.`in`)
    
    // переменная для хранения количества чисел
    println("Введите количество чисел")
    val n = scanner.nextInt() // ввод количества чисел

    // Цикл для обработки каждого числа
    for (i in 0 until n) {
        // переменная для хранения текущего числа
        println("Введите число")
        val num = scanner.nextInt() // Считывание числа

        if (ValidTime(num)) {
            print("YES ")
        } else {
            print("NO ")
        }
    }

    println() // Перевод строки после вывода всех результатов
}
