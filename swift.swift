import Foundation

func isCyclicShift(_ S: String, _ T: String) -> Bool {
    guard S.count == T.count else {
        return false
    }
    // Конкатенируем строку S саму с собой и проверяем наличие T
    let concatenated = S + S
    return concatenated.contains(T)
}

print("Введите две строки разделенные пробелом:", terminator: " ")

guard let input = readLine() else {
    fatalError("Ошибка чтения ввода")
}

let components = input.components(separatedBy: " ")

guard components.count == 2 else {
    fatalError("Пожалуйста, введите ровно две строки через пробел")
}

let S = components[0]
let T = components[1]

print(isCyclicShift(S, T) ? "Yes" : "No")