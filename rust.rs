use std::io;

// функция для проверки условия
fn validtime(num: i32) -> bool {
    // перебираем все возможные позиции для вставки ':'
    let mut divider = 1;
    while divider <= 1000 {
        // делим число на часы и минуты
        let hours = num / divider;
        let minutes = num % divider;

        // проверка чисел часов и минут
        if hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 {
            // проверка на корректное количество цифр в минутах
            if (divider == 1 && minutes < 10) ||    // для формата X:Y
               (divider == 10 && minutes < 100) ||  // для формата XX:YY
               (divider == 100 && minutes < 1000) || // для формата X:YYY
               (divider == 1000)                   // для формата XX:YYY
            {
                return true; // возвращаем true если все условия выполнены
            }
        }
        divider *= 10;
    }
    false
}

fn main() {
    let mut input = String::new();
    
    // переменная для хранения количества чисел
    println!("Введите количество чисел");
    io::stdin().read_line(&mut input).expect("Ошибка чтения");
    let n: i32 = input.trim().parse().expect("Ожидается число");
    input.clear();

    // Цикл для обработки каждого числа
    for _ in 0..n {
        // переменная для хранения текущего числа
        println!("Введите число");
        io::stdin().read_line(&mut input).expect("Ошибка чтения");
        let num: i32 = input.trim().parse().expect("Ожидается число");
        input.clear();

        if validtime(num) {
            print!("YES ");
        } else {
            print!("NO ");
        }
    }

    println!();
}
