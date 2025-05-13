def is_cyclic_shift(S: str, T: str) -> bool:
    # Проверяем равны ли длины строк
    if len(S) != len(T):
        return False
    
    # Проверяем, содержится ли T в S+S
    return T in (S + S)

print("Введите две строки, разделенные пробелом:")
S, T = input().split()
print("Да" if is_cyclic_shift(S, T) else "Нет")
