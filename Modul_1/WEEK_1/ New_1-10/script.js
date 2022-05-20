
let pagination = document.getElementById('pagination');
pagination.onclick = function(event){
    if (event.target.type === "button"){
        let numberOfQuestion = event.target.dataset.question;
        let activeQuestion = document.getElementById(numberOfQuestion);
        let questions = document.getElementsByTagName('form');
        for (let i = 0; i < questions.length; i++){
            questions[i].style.display = 'none';
        }
        activeQuestion.style.display = "block";
    }
};
    

let btn = document.getElementById('btn');

    btn.onclick = function (event) {
    let userInput = document.getElementById ('userInput');
    let value = userInput.value;
    let userOutput = document.getElementById('userOutput'); 

    let outputValue = `Привет, ${value} !`;

    userOutput.innerHTML = outputValue;
};

    btn2.onclick = function (event) {
    let userInput = document.getElementById ('userInput2');
    let value = +userInput.value;
    let userOutput = document.getElementById('userOutput2'); 

    let outputValue = 2022 - value;

    userOutput.innerHTML = `Вам: ${outputValue}`;
}

    btn3.onclick = function (event) {
    let userInput = +document.getElementById ('userInput3').value;
    let userOutput = document.getElementById('userOutput3'); 

    let outputValue = userInput * 4;

    userOutput.innerHTML = `Периметр квадрата равен: ${outputValue}.` ;
};

    btn4.onclick = function (event) {
        let userInput = +document.getElementById ('userInput4').value;
        let userOutput = document.getElementById('userOutput4'); 

        let outputValue =  Math.floor(Math.PI * (userInput ** 2));

        userOutput.innerHTML = `Площадь окружности равна: ${outputValue}.`;
    };

    btn5.onclick = function (event) {
        let userInput = +document.getElementById ('userInput5').value;
        let userInput_2 = +document.getElementById ('userInput5_2').value;
        let userOutput = document.getElementById('userOutput5'); 

        userOutput.innerHTML = `Вам необходимо двигаться со скоростью: ${userInput / userInput_2}км/ч.`;
    };

    btn6.onclick = function (event) {
        let userInput = +document.getElementById ('userInput6').value;
        const euro = 0.92;
        let userOutput = document.getElementById('userOutput6'); 

        userOutput.innerHTML = `${userInput}$ конвертируется в ${userInput * euro}€.`;
    };

    btn7.onclick = function (event) {
        let userInput = +document.getElementById ('userInput7').value * 1024;
        const file = 820;
        let userOutput = document.getElementById('userOutput7'); 

        userOutput.innerHTML = `На флешку поместится: ${(userInput / file).toFixed(0)} таких файла.`;
    };

    btn8.onclick = function (event) {
        let userInput = +document.getElementById ('userInput8').value;
        let userInput_2 = +document.getElementById ('userInput8_2').value;
        let userOutput = document.getElementById('userOutput8'); 

        userOutput.innerHTML = `Вы можете купить ${Math.floor(userInput / userInput_2)} шоколадок и у Вас отстанется ${userInput % userInput_2} рублей`;
    };

    btn9.onclick = function (event) {
        let userInput = +document.getElementById ('userInput9').value;
        let userOutput = document.getElementById('userOutput9'); 
          function functionName (number) {
            let result = 0;  
            while (number) {
            result *= 10;
            result += number % 10;
            number = Math.floor(number / 10);
        }
        return result;
        }
        userOutput.innerHTML = `Результат (после непонятного решения) = ${functionName(userInput)}`;
    };

    btn10.onclick = function (event) {
        let userInput = +document.getElementById ('userInput10').value;
        let userOutput = document.getElementById('userOutput10'); 

        let result = userInput === 0 ? 'Четное! Сам в шоке :) Вот ссылка <a href="https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%BD%D1%83%D0%BB%D1%8F#:~:text=%D0%9D%D0%BE%D0%BB%D1%8C%20%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%81%D1%8F%20%D0%BD%D0%B5%20%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%BD%D0%B0,%D1%87%D1%91%D1%82%D0%BD%D1%8B%D0%BC%C2%BB%20%D1%87%D0%B8%D1%81%D0%BB%D0%BE%D0%BC%20%D0%B8%D0%B7%20%D0%B2%D1%81%D0%B5%D1%85%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB." target="_blank">Чётность нуля</a>' : "" || userInput % 2 ? 'Нечетное' : 'Четное';

        userOutput.innerHTML = `Ваше число: ${result}`;
    };