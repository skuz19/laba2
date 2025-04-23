fun isCyclicShift(S: String, T: String): Boolean {
    if (S.length != T.length) {
        return false
    }
    return (S + S).contains(T)
}

fun main() {
    println("Введите две строки разделенные пробелом:")
    val (S, T) = readLine()!!.split(' ')
    println(if (isCyclicShift(S, T)) "Да" else "Нет")
}