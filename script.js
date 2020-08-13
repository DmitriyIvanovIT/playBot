'use strict';
let isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const playBot = function () {
    let ansverProgram = 33,
    userAnswer = prompt('Угадай число от 1 до 100');

    if (userAnswer !== null) {
        if (!isNumber(userAnswer)) {
            alert('Введи число!');
        } else if (parseFloat(userAnswer) > ansverProgram) {
            alert('Загаданное число меньше');
        } else if (parseFloat(userAnswer) < ansverProgram) {
            alert('Загаданное число больше');
        }

        playBot();
    }
};


playBot();