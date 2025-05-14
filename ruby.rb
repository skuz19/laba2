# функция для проверки условия
def validtime(num)
  # перебираем все возможные позиции для вставки ':'
  divider = 1
  while divider <= 1000
    # делим число на часы и минуты
    hours = num / divider
    minutes = num % divider

    # проверка чисел часов и минут
    if hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
      # проверка на корректное количество цифр в минутах
      if (divider == 1 && minutes < 100) || # для формата X:Y
         (divider == 10 && minutes < 100) || # для формата XX:YY
         (divider == 100 && minutes < 1000) || # для формата X:YYY
         (divider == 1000)
        return true # возвращаем true если все условия выполнены
      end
    end
    divider *= 10
  end

  false
end

puts "Введите количество чисел"
n = gets.chomp.to_i # ввод количества чисел

# Цикл для обработки каждого числа
(0...n).each do |i|
  puts "Введите число"
  num = gets.chomp.to_i # Считывание числа

  if validtime(num)
    print "YES "
  else
    print "NO "
  end

  puts
end
