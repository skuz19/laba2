// Проверка латинской буквы
function isLatin(c: string): boolean {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

// Проверка условия
function isPangram(sentence: string): boolean {
    const letters = new Set<string>();
    for (const c of sentence) {
        if (isLatin(c)) {
            letters.add(c.toLowerCase());
        }
    }
    return letters.size === 26;
}

// Проверка символа на пунктуацию
function isPunctuation(c: string): boolean {
    const punctuation = '.,;:!?"\'()-';
    return punctuation.includes(c);
}

function main(): void {
    const input: string | null = prompt("Введите строку:");
    
    if (!input) {
        console.error("Ошибка ввода");
        return;
    }

    // Проверка на наличие нелатинских символов
    let hasNonLatin: boolean = false;
    for (const c of input) {
        if (!isLatin(c) && !/\s/.test(c) && !isPunctuation(c)) {
            hasNonLatin = true;
            break;
        }
    }

    if (hasNonLatin) {
        console.error("Ошибка: введите только латинские буквы");
        return;
    }

    const result: boolean = isPangram(input);
    console.log(result ? "true" : "false");
}

main();
