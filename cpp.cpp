#include <iostream>
using namespace std;

// функция для проверки условия
bool validtime(int num) {
    // перебираем все возможные позиции для вставки ':'
    for (int divider = 1; divider <= 1000; divider *= 10) {
        // делим число на часы и минуты
        int hours = num / divider;
        int minutes = num % divider;
        
        // проверка чисел часов и минут
        if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
            //проверка на корректное количество цифр в минутах
            if ((divider == 1 && minutes < 10) ||    // для формата X:Y 
                (divider == 10 && minutes < 100) ||  // для формата XX:YY 
                (divider == 100 && minutes < 1000) || // для формата X:YYY 
                (divider == 1000)) {                 // для формата XX:YYY
                return true; // возвращаем true если все условия выполнены
            }
        }
    }
    return false;
}

int main() {
    int n; // пременная для хранения количества чисел
    cout << "Введите количество чисел" << endl;
    cin >> n; // ввод количества чисел

    // Цикл для обработки каждого числа
    for (int i = 0; i < n; i++) {
        int num; // переменная для хранения текущего числа
        cout << "Введите число" << endl;
        cin >> num; // Считывание числа

        if (validtime(num)) {
            cout << "YES ";
        } else {
            cout << "NO ";
        }
    }

    cout << endl;
    return 0;
}
