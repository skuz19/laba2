# Проверка латинской буквы
def latin?(c)
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
end

# Проверка символа на пунктуацию
def punctuation?(c)
  ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '-'].include?(c)
end

# Проверка условия
def pangram?(sentence)
  letters = Set.new
  sentence.each_char do |c|
    if latin?(c)
      letters.add(c.downcase)
    end
  end
  letters.size == 26
end

require 'set'

print "Введите строку: "
input = gets.chomp

# Проверка на наличие нелатинских символов
no_latin = input.chars.any? do |c|
  !latin?(c) && !c.match?(/\s/) && !punctuation?(c)
end

if no_latin
  puts "Ошибка: введите только латинские буквы"
  exit(1)
end

result = pangram?(input)
puts result ? "true" : "false"
