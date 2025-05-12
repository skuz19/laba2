use std::collections::HashSet;
use std::io;

// Проверка латинской буквы
fn is_latin(c: char) -> bool {
    (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

// Проверка символа на пунтуацию
fn is_punctuation(c: char) -> bool {
    matches!(c, '.' | ',' | ';' | ':' | '!' | '?' | '"' | '\'' | '(' | ')' | '-')
}

// Проверка условия
fn is_pangram(sentence: &str) -> bool {
    let mut letters = HashSet::new();
    for c in sentence.chars() {
        if is_latin(c) {
            letters.insert(c.to_ascii_lowercase());
        }
    }
    letters.len() == 26
}

fn main() {
    println!("Введите строку:");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Ошибка ввода");

    // Удаляем символ новой строки в конце
    let input = input.trim();

    // Проверка на наличие нелатинских символов
    let mut has_non_latin = false;
    for c in input.chars() {
        if !is_latin(c) && !c.is_whitespace() && !is_punctuation(c) {
            has_non_latin = true;
            break;
        }
    }

    if has_non_latin {
        eprintln!("Ошибка: введите только латинские буквы");
        std::process::exit(1);
    }

    let result = is_pangram(input);
    println!("{}", if result { "true" } else { "false" });
}
