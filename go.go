package main

import (
	"fmt"
)

// функция для проверки условия
func validtime(num int) bool {
	// перебираем все возможные позиции для вставки ':'
	for divider := 1; divider <= 1000; divider *= 10 {
		// делим число на часы и минуты
		hours := num / divider
		minutes := num % divider

		// проверка чисел часов и минут
		if hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 {
			// проверка на корректное количество цифр в минутах
			if (divider == 1 && minutes < 10) ||    // для формата X:Y
			   (divider == 10 && minutes < 100) ||    // для формата XX:YY
			   (divider == 100 && minutes < 1000) ||    // для формата X:YYY
			   (divider == 1000) {    // для формата XX:YYY
				return true // возвращаем true если все условия выполнены
			}
		}
	}
	return false
}

func main() {
	var n int // переменная для хранения количества чисел
	fmt.Println("Введите количество чисел")
	fmt.Scan(&n) // ввод количества чисел

	// Цикл для обработки каждого числа
	for i := 0; i < n; i++ {
		var num int // переменная для хранения текущего числа
		fmt.Println("Введите число")
		fmt.Scan(&num) // Считывание числа

		if validtime(num) {
			fmt.Print("YES ")
		} else {
			fmt.Print("NO ")
		}
	}

	fmt.Println()
}
