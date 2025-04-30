import java.util.Scanner;

public class Main {

    // Проверка условия 
    public static boolean isValidTime(int num) {
        // Перебираем все возможные позиции для вставки ':'
        for (int divider = 1; divider <= 1000; divider *= 10) {
            // Делим число на часы и минуты
            int hours = num / divider;
            int minutes = num % divider;

            // Проверка чисел часов и минут
            if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
                // Проверка на корректное количество цифр в минутах
                if ((divider == 1 && minutes < 10) ||    // для формата X:Y
                    (divider == 10 && minutes < 100) ||  // для формата XX:YY
                    (divider == 100 && minutes < 1000) || // для формата X:YYY
                    (divider == 1000)) {                 // для формата XX:YYY
                    return true; // Возвращаем true если все условия выполнены
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n; // Переменная для хранения количества чисел
        System.out.println("print count of numbers");
        n = scanner.nextInt(); // Ввод количества чисел

        // Цикл для обработки каждого числа
        for (int i = 0; i < n; i++) {
            int num; // Переменная для хранения текущего числа
            System.out.println("print number");
            num = scanner.nextInt(); // Считывание числа

            if (isValidTime(num)) {
                System.out.print("YES ");
            } else {
                System.out.print("NO ");
            }
        }

        System.out.println(); // Перевод строки после вывода всех результатов
        scanner.close();
    }
}
