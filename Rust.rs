use std::io;

fn is_cyclic_shift(s: &str, t: &str) -> bool {
    // Проверка равенства длин строк
    if s.len() != t.len() {
        return false;
    }
    // Конкатенация строки с собой и проверка вхождения
    let concatenated = format!("{}{}", s, s);
    concatenated.contains(t)
}

fn main() {
    println!("Введите две строки разделенные пробелом:");

    // Чтение ввода
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Ошибка чтения ввода");

    // Удаление пробелов
    let input = input.trim();

    // Разделение на компоненты
    let components: Vec<&str> = input.split_whitespace().collect();

    // Проверка количества компонентов
    if components.len() != 2 {
        eprintln!("Введите только две строки");
        std::process::exit(1);
    }

    let s = components[0];
    let t = components[1];

    println!("{}", if is_cyclic_shift(s, t) { "Да" } else { "Нет" });
}
