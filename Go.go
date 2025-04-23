package main

import (
	"fmt"
	"strings"
)

func isCyclicShift(S, T string) bool {
	
	if len(S) != len(T) {
		return false
	}
		return strings.Contains(S+S, T)
}

func main() {
	var S, T string
	
	fmt.Println("Введите две строки разделенные пробелом:")
	

	fmt.Scan(&S, &T)
	
	if isCyclicShift(S, T) {
		fmt.Println("Да")
	} else {
		fmt.Println("Нет")
	}
}