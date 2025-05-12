using System;
using System.Collections.Generic;

class Program
{
    static bool latin(char c)
    {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }

    static bool pangram(string sentence)
    {
        HashSet<char> letters = new HashSet<char>();
        foreach (char c in sentence)
        {
            if (latin(c))
            {
                letters.Add(char.ToLower(c));
            }
        }
        return letters.Count == 26;
    }

    static void Main()
    {
        string input;
        Console.WriteLine("print text\n");
        input = Console.ReadLine();

        bool nolatin = false;
        foreach (char c in input)
        {
            if (!latin(c) && !char.IsWhiteSpace(c) && !char.IsPunctuation(c))
            {
                nolatin = true;
                break;
            }
        }

        if (nolatin)
        {
            Console.WriteLine("Ошибка: введите только латинские буквы\n");
            return;
        }

        bool result = pangram(input);
        Console.WriteLine(result ? "true" : "false");
    }
}
