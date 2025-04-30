import Foundation

// Проверка условия
func ValidTime(_ num: Int) -> Bool {
    // Перебираем все возможные позиции для вставки ':'
    var divider = 1
    while divider <= 1000 {
        // Делим число на часы и минуты
        let hours = num / divider
        let minutes = num % divider
        
        // Проверка чисел часов и минут
        if hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 {
            // Проверка на корректное количество цифр в минутах
            if (divider == 1 && minutes < 10) ||    // для формата X:Y
               (divider == 10 && minutes < 100) ||  // для формата XX:YY
               (divider == 100 && minutes < 1000) || // для формата X:YYY
               (divider == 1000) {                  // для формата XX:YYY
                return true
            }
        }
        divider *= 10
    }
    return false
}

// Основная программа
print("Введите количество чисел")
guard let n = Int(readLine() ?? "") else {
    fatalError("Ожидалось целое число")
}

// Цикл для обработки каждого числа
for _ in 0..<n {
    print("Введите число")
    guard let num = Int(readLine() ?? "") else {
        fatalError("Ожидалось целое число")
    }
    
    if ValidTime(num) {
        print("YES ", terminator: "")
    } else {
        print("NO ", terminator: "")
    }
}

print() 
