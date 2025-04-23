using System;

class Program
{
    static bool IsCyclicShift(string S, string T)
    {
        if (S.Length != T.Length)
        {
            return false;
        }

        string concatenatedString = S + S;
        
        return concatenatedString.Contains(T);
    }

    static void Main()
    {
        Console.WriteLine("Введите две строки разделенные пробелом:");
        string[] input = Console.ReadLine().Split(' ');
        string S = input[0];
        string T = input[1];

        Console.WriteLine(IsCyclicShift(S, T) ? "Да" : "Нет");
    }
}