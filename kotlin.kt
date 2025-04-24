fun latin(c: Char): Boolean {
    // Проверка латинской буквы
    return (c in 'a'..'z') || (c in 'A'..'Z')
}

fun pangram(sentence: String): Boolean {
    // Проверка условия
    val letters = mutableSetOf<Char>()
    for (c in sentence) {
        if (latin(c)) {
            letters.add(c.lowercaseChar())
        }
    }
    return letters.size == 26
}

fun isPunctuation(c: Char): Boolean {
    // Проверка символа на пунктуацию
    return c in ".,;:!?\"'()-"
}

fun main() {
    print("Введите строку: \n")
    val input = readlnOrNull() ?: run {
        println("Ошибка чтения ввода")
        return
    }

    // Проверка на наличие нелатинских символов
    var noLatin = false
    for (c in input) {
        if (!latin(c) && !c.isWhitespace() && !isPunctuation(c)) {
            noLatin = true
            break
        }
    }

    if (noLatin) {
        println("Ошибка: введите только латинские буквы")
        return
    }

    val result = pangram(input)
    println(if (result) "true" else "false")
}
