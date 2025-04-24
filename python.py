def latin(c):
    # Проверяка латинской буквы
    return ('a' <= c <= 'z') or ('A' <= c <= 'Z')

def pangram(sentence):
    # Проверяет условия
    letters = set()
    for c in sentence:
        if latin(c): 
            letters.add(c.lower())  # Добавляем в нижнем регистре
    return len(letters) == 26  # Проверяем наличие всех 26 букв

input_str = input("Введите строку: \n")

# Проверка на наличие нелатинских символов
nolatin = False
for c in input_str:
    if not latin(c) and not c.isspace() and not c in '.,;:!?"\'()-':
        nolatin = True
        break

if nolatin:
    print("Ошибка: введите только латинские буквы\n")
    exit(1)

result = pangram(input_str)
print("true" if result else "false")
