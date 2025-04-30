using System;

class Program
{
    // Функция для проверки условия
    static bool ValidTime(int num)
    {
        // Перебираем все возможные позиции для вставки ':'
        for (int divider = 1; divider <= 1000; divider *= 10)
        {
            // Делим число на часы и минуты
            int hours = num / divider;
            int minutes = num % divider;

            // Проверка чисел часов и минут
            if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59)
            {
                // Проверка на корректное количество цифр в минутах
                if ((divider == 1 && minutes < 10) ||    // для формата X:Y
                    (divider == 10 && minutes < 100) ||  // для формата XX:YY
                    (divider == 100 && minutes < 1000) || // для формата X:YYY
                    (divider == 1000))                   // для формата XX:YYY
                {
                    return true; // Возвращаем true если все условия выполнены
                }
            }
        }
        return false;
    }

    static void Main()
    {
        int n; // Переменная для хранения количества чисел
        Console.WriteLine("print count of numbers");
        n = int.Parse(Console.ReadLine()); // Ввод количества чисел

        // Цикл для обработки каждого числа
        for (int i = 0; i < n; i++)
        {
            int num; // Переменная для хранения текущего числа
            Console.WriteLine("print number");
            num = int.Parse(Console.ReadLine()); // Считывание числа

            if (ValidTime(num))
            {
                Console.Write("YES ");
            }
            else
            {
                Console.Write("NO ");
            }
        }

        Console.WriteLine(); // Перевод строки после вывода всех результатов
    }
}
