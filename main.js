let score = 0;

function askMe(question, correctAnswer) {
    let userAnswer = prompt(question);
    if (userAnswer === null) {
        alert('Ок, чекаю ваших питань іншим разом. Гарного дня)')
        return;
    }

    if (userAnswer.trim() === correctAnswer) {
        alert('Wow! Вірно! 10 балів ваші!');
        score += 10;
    } else {
        alert('Oops! Нажаль ви помилились..');
    }
}

askMe('Скільки буде 2 + 2?', '4');
askMe('Сонце встає на сході?', 'так');
askMe('Скільки буде 5 / 0?', 'не можна ділити на 0');
askMe('Якого кольору небо?', 'синій');
askMe('Яка правильна відповідь на головне питання життя, всесвіту та всього такого?', '42');

alert(`Гарна гра, ви заробили: ${score} балів`);