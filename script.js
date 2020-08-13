'use strict';
let isNumber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    randomInteger = function (min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

const playBot = function () {
    let ansverProgram = randomInteger(1, 100),
        numberAttempts = 10;
    const playBotGame = () => {
        let userAnswer = prompt('Угадай число от 1 до 100');

        if (userAnswer !== null) {
            if (!isNumber(userAnswer)) {
                alert('Введи число!');
                playBotGame();
            };

            numberAttempts--;

            if (numberAttempts !== 0) {
                if (parseFloat(userAnswer) === ansverProgram) {
                    userAnswer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

                    if (userAnswer !== false) {
                        playBot();
                    }
                } else if (parseFloat(userAnswer) > ansverProgram) {
                    alert(`Загаданное число меньше, осталось попыток: ${numberAttempts}`);
                    playBotGame();
                } else if (parseFloat(userAnswer) < ansverProgram) {
                    alert(`Загаданное число больше, осталось попыток: ${numberAttempts}`);
                    playBotGame();
                }
            } else if (numberAttempts === 0) {
            userAnswer = confirm(`Попытки закончились!! Загаданое число: ${ansverProgram}, хотите сыграть еще?`);

            if (userAnswer !== false) {
                playBot();
            }
        };
        }  
    };

    playBotGame();
}




playBot();