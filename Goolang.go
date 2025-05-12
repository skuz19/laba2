package main

import (
	"bufio"
	"fmt"
	"os"
	"unicode"
)

func latin(c rune) bool {
	// Проверка латинской буквы
	return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

func pangram(sentence string) bool {
	// Проверка условия задачи
	letters := make(map[rune]bool)
	for _, c := range sentence {
		if latin(c) {
			letters[unicode.ToLower(c)] = true
		}
	}
	return len(letters) == 26
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Введите строку: ")
	input, _ := reader.ReadString('\n')

	// Проверка на наличие нелатинских символов
	nolatin := false
	for _, c := range input {
		if !latin(c) && !unicode.IsSpace(c) && !unicode.IsPunct(c) {
			nolatin = true
			break
		}
	}

	if nolatin {
		fmt.Println("Ошибка: введите только латинские буквы")
		os.Exit(1)
	}

	result := pangram(input)
	if result {
		fmt.Println("true")
	} else {
		fmt.Println("false")
	}
}
