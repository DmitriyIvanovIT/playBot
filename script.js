'use strict';
let isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
},
randomInteger = function (min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const playBot = function () {
    let ansverProgram = randomInteger(1, 100);

    const playBotGame = function () {
        let userAnswer = prompt('Угадай число от 1 до 100');

        if (parseFloat(userAnswer) === ansverProgram) {
            userAnswer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

            if (userAnswer !== false) {
                playBot();
            }
        } else if (userAnswer !== null) {
            if (!isNumber(userAnswer)) {
                alert('Введи число!');
            } else if (parseFloat(userAnswer) > ansverProgram) {
                alert('Загаданное число меньше');
            } else if (parseFloat(userAnswer) < ansverProgram) {
                alert('Загаданное число больше');
            }
    
            playBotGame();
        }
    };

    playBotGame();
};


playBot();