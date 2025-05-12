#include <unordered_set>
#include <string>
#include <iostream>
#include <cctype>

using namespace std;

bool latin(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

bool pangram(const string& sentence) {
    unordered_set<char> letters;
    for (char c : sentence) {
        if (latin(c)) { // Проверяем латинские буквы
            letters.insert(tolower(c)); // Приводим к нижнему регистру
        }
    }
    return letters.size() == 26;
}

int main() {
    string input;
    cout << "Введите строку:\n";
    getline(cin, input);

    // Дополнительная проверка на наличие нелатинских символов
    bool nolatin = false;
    for (char c : input) {
        if (!latin(c) && !isspace(c) && !ispunct(c)) {
            nolatin = true;
            break;
        }
    }

    if (nolatin) {
        cout << "Ошибка: введите только латинские буквы\n";
        return 1;
    }

    bool result = pangram(input);
    cout << (result ? "true" : "false") << endl;

    return 0;
}
