import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {

    // Проверка латинской буквы
    private static boolean isLatin(char c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }

    // Проверка условия
    private static boolean isPangram(String sentence) {
        Set<Character> letters = new HashSet<>();
        for (char c : sentence.toCharArray()) {
            if (isLatin(c)) {
                letters.add(Character.toLowerCase(c));
            }
        }
        return letters.size() == 26;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("print text: ");
        String input = scanner.nextLine();

        // Проверка на наличие нелатинских символов
        boolean hasNonLatin = false;
        for (char c : input.toCharArray()) {
            if (!isLatin(c) && !Character.isWhitespace(c) && !isPunctuation(c)) {
                hasNonLatin = true;
                break;
            }
        }

        if (hasNonLatin) {
            System.out.println("Ошибка: введите только латинские буквы");
            System.exit(1);
        }

        boolean result = isPangram(input);
        System.out.println(result ? "true" : "false");
    }

    // Проверка является ли символ пунктуацией
    private static boolean isPunctuation(char c) {
        return c == '.' || c == ',' || c == ';' || c == ':' || c == '!' || 
               c == '?' || c == '"' || c == '\'' || c == '(' || c == ')';
    }
}
