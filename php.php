<?php

function latin($c) {
    return ($c >= 'a' && $c <= 'z') || ($c >= 'A' && $c <= 'Z');
}

function pangram($sentence) {
    $letters = array();
    for ($i = 0; $i < strlen($sentence); $i++) {
        $c = $sentence[$i];
        if (latin($c)) {
            $lower = strtolower($c);
            if (!in_array($lower, $letters)) {
                array_push($letters, $lower);
            }
        }
    }
    return count($letters) == 26;
}

echo "Введите строку: \n";
$input = trim(fgets(STDIN));

// Дополнительная проверка на наличие нелатинских символов
$noLatin = false;
for ($i = 0; $i < strlen($input); $i++) {
    $c = $input[$i];
    if (!latin($c) && !ctype_space($c) && !ctype_punct($c)) {
        $noLatin = true;
        break;
    }
}

if ($noLatin) {
    echo "Ошибка: введите только латинские буквы\n";
    exit(1);
}

$result = pangram($input);
echo $result ? "true" : "false";
echo "\n";

?>
