# Функция проверки циклического сдвига
def is_cyclic_shift(s, t)
  # Если длины строк разные, возвращаем false
  return false unless s.length == t.length
  
  # Конкатенируем строку саму с собой и проверяем наличие подстроки
  concatenated = s + s
  concatenated.include?(t)
end

print "Введите две строки разделенные пробелом: "
input = gets.chomp  # Чтение ввода с удалением символа новой строки

# Разделение ввода на компоненты
components = input.split(/\s+/)

# Проверка количества компонентов
if components.size != 2
  STDERR.puts "Введите только две строки"
  exit 1
end

s, t = components

puts is_cyclic_shift(s, t) ? "Да" : "Нет"
