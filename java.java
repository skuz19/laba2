import java.util.Scanner;

public class CyclicShiftChecker {

    public static boolean isCyclicShift(String S, String T) {
        if (S == null || T == null || S.length() != T.length()) {
            return false;
        }
        return (S + S).contains(T);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter two strings separated by space: ");
        String input = scanner.nextLine().trim(); // Удаляем лишние пробелы

        // Разделяем ввод на две строки
        String[] strings = input.split("\\s+"); // Выражение для любого количества пробелов

        if (strings.length != 2) {
            System.out.println("Error: Enter only two strings ");
            scanner.close();
            return;
        }

        String S = strings[0];
        String T = strings[1];

        System.out.println(isCyclicShift(S, T) ? "Yes" : "No");

        scanner.close();
    }
}
