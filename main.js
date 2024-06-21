// Функция для проверки типа переменной и вывода результата
function checkVariableType() {
    let variable = 1; // Здесь может быть любое значение
    let type = typeof variable;
    let resultText;

    if (type === 'string') {
        resultText = 'Тип переменной: строка. Значение: ' + variable;
    } else if (type === 'number') {
        resultText = 'Тип переменной: число. Значение: ' + variable;
    } else if (type === 'boolean') {
        resultText = 'Тип переменной: булево. Значение: ' + variable;
    } else {
        resultText = 'Тип переменной: другой. Значение: ' + variable;
    }

    // Выводим результат в элемент с id 'result-0'
    document.getElementById('result-0').textContent = resultText;
}


// Функция приветствия по знаку зодиака
function showGreeting() {
    const zodiacSign = document.getElementById('zodiacSign').value.toLowerCase();
    let greeting;
    switch (zodiacSign) {
        case 'овен':
            greeting = "Привет, Овен!";
            break;
        case 'телец':
            greeting = "Привет, Телец!";
            break;
        case 'близнецы':
            greeting = "Привет, Близнецы!";
            break;
        case 'рак':
            greeting = "Привет, Рак!";
            break;
        case 'лев':
            greeting = "Привет, Лев!";
            break;
        case 'дева':
            greeting = "Привет, Дева!";
            break;
        case 'весы':
            greeting = "Привет, Весы!";
            break;
        case 'скорпион':
            greeting = "Привет, Скорпион!";
            break;
        case 'стрелец':
            greeting = "Привет, Стрелец!";
            break;
        case 'козерог':
            greeting = "Привет, Козерог!";
            break;
        case 'водолей':
            greeting = "Привет, Водолей!";
            break;
        case 'рыбы':
            greeting = "Привет, Рыбы!";
            break;
        default:
            greeting = 'Приветствие для этого знака зодиака еще не добавлено.';
    }
    alert(greeting);
}


// Функция для запуска вирусного текста
function startVirus() {
    let message = document.getElementById('virusMessage');
    setInterval(() => {
        message.textContent += " Вирусный текст!";
    }, 1000);
}

function populateNumbers() {
    let numbersForList = document.getElementById('numbersFor');
    for (let i = 1; i <= 40; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        numbersForList.appendChild(li);
    }

    let numbersWhileList = document.getElementById('numbersWhile');
    let i = 1;
    while (i <= 40) {
        let li = document.createElement('li');
        li.textContent = i;
        numbersWhileList.appendChild(li);
        i++;
    }

    let numbersDoWhileList = document.getElementById('numbersDoWhile');
    i = 1;
    do {
        let li = document.createElement('li');
        li.textContent = i;
        numbersDoWhileList.appendChild(li);
        i++;
    } while (i <= 40);
}

// Функция проверки числа
function checkNumber() {
    let number = parseInt(document.getElementById('numberInput').value, 10);
    if (isNaN(number)) {
        alert("Введите число!");
    } else if (number > 5) {
        alert("Поздравляем! Вы ввели число больше 5.");
    } else {
        alert("Введенное число меньше или равно 5. Повторите попытку.");
    }
}

// Обработчики событий для кнопок и заполнение списков числами
document.addEventListener('DOMContentLoaded', function() {
    // Привязка функции приветствия к кнопке
    document.getElementById('btn-1').addEventListener('click', showGreeting);

    // Привязка функции вирусного текста к кнопке
    document.getElementById('btn-3').addEventListener('click', startVirus);

    // Привязка функции проверки числа к кнопке
    document.getElementById('btn-4').addEventListener('click', checkNumber);

    document.getElementById('btn-0').addEventListener('click', checkVariableType);

    // Вызов функции для заполнения списков числами
    populateNumbers();

    // Заполнение списка четными числами
    let evenNumbersList = document.getElementById('evenNumbers');
    for (let i = 8; i <= 20; i += 2) {
        let listItem = document.createElement('li');
        listItem.textContent = i;
        evenNumbersList.appendChild(listItem);
    }

    // Заполнение списка нечетными числами
    let oddNumbersList = document.getElementById('oddNumbers');
    for (let i = 1; i <= 7; i += 2) {
        if (i === 5) continue; // Пропускаем число 5
        let listItem = document.createElement('li');
        listItem.textContent = i;
        oddNumbersList.appendChild(listItem);
    }
});
