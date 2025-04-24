import Foundation

// Проверка латинской буквы
func latin(_ c: Character) -> Bool {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z")
}

// Проверка условия 
func pangram(_ sentence: String) -> Bool {
    var letters = Set<Character>()
    for c in sentence {
        if latin(c) {
            letters.insert(c.lowercased().first!)
        }
    }
    return letters.count == 26
}

// Проверка символа на пунктуацию
func isPunctuation(_ c: Character) -> Bool {
    let punctuation = ".,;:!?\"'()-"
    return punctuation.contains(c)
}

print("Введите строку:")
guard let input = readLine() else {
    fatalError("Ошибка чтения ввода")
}

// Проверка на наличие нелатинских символов
var noLatin = false
for c in input {
    if !latin(c) && !c.isWhitespace && !isPunctuation(c) {
        noLatin = true
        break
    }
}

if noLatin {
    print("Ошибка: введите только латинские буквы")
    exit(1)
}

let result = pangram(input)
print(result ? "true" : "false")
