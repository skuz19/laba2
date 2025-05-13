def validtime(num):
    # перебираем все возможные позиции для вставки ':'
    divider = 1
    while divider <= 1000:
        # делим число на часы и минуты
        hours = num // divider
        minutes = num % divider

        # проверка чисел часов и минут
        if 0 <= hours <= 23 and 0 <= minutes <= 59:
            # проверка на корректное количество цифр в минутах
            if (divider == 1 and minutes < 10) or (divider == 10 and minutes < 100) or (divider == 100 and minutes < 1000) or (divider == 1000):
                return True  # возвращаем true если все условия выполнены
        
        divider *= 10
    
    return False

# Ввод количества чисел
print("Введите количество чисел")
n = int(input())

# Цикл для обработки каждого числа
for i in range(n):
    print("Введите число")
    num = int(input())

    if validtime(num):
        print("YES ", end='')
    else:
        print("NO ", end='')

print()  # Перевод строки после вывода всех результатов
