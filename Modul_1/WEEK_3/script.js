
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
    let userInput = document.getElementById ('userInput').value.split('-');
    let userOutput = document.getElementById('userOutput'); 
    let range = 0;

    for (i = +userInput[0]; i <= +userInput[1]; i++ ){
         range += i;
    }
    

    userOutput.innerHTML = `Cумма всех чисел: ${range}`;
};

// **Пытался решить сам, не получилось. Взял решение из интернета**
    btn2.onclick = function (event) {
    let userInput = +document.getElementById ('userInput2').value,
        userInput2 = +document.getElementById ('userInput2_2').value,
        userOutput = document.getElementById('userOutput2');
    
        function NOD (x, y) {
            if (y > x) return NOD(y, x);
            if (!y) return x;
            return NOD(y, x % y);
        }
        userOutput.innerHTML = `Наибольший общий делитель:"${NOD(userInput, userInput2)}"`;
    };


    btn3.onclick = function (event) {
    let userInput = +document.getElementById ('userInput3').value;
    let userOutput = document.getElementById('userOutput3'); 
    let verdict = [];

    for(i = 1; i <= userInput; i++ ){
        if(userInput % i == 0){
            verdict.push(i);
        }
    }
    

    userOutput.innerHTML = `Все делители этого числа:"${verdict}"`;
};

    btn4.onclick = function (event) {
        let userInput = document.getElementById ('userInput4').value;
        let userOutput = document.getElementById('userOutput4'); 
        let number;

        for(i = 1; i <= userInput.length; i++ ){
            number = i;
        }
        userOutput.innerHTML = `Количество цифр в вашем числе = ${number}.`;
    };

    btn5.onclick = function (event) {
        let userInput = document.getElementById ('userInput5').value.split(' ');
        let userOutput = document.getElementById('userOutput5'),
        even = 0,
        odd = 0,
        zero = 0,
        positive = 0,
        negative = 0;


        for (i = 0; i <= userInput.length - 1; i ++ ) {

            
            if ( userInput[i] % 2){
                odd += 1 ;
            } else  {
                even += 1 ;
            } 
            
            if ( userInput[i] > 0 ){
                positive += 1;
            }else if ( userInput[i] < 0 ){
                negative += 1 ;
            } else {
                zero += 1;
            }
        }
        console.log(userInput.length);
        userOutput.innerHTML = `Вы ввели:
        положительных: ${positive},
        отрицательных: ${negative},
        нулей: ${zero},
        четных: ${even},
        нечетных: ${odd}.`;
    };   
    
    btn6.onclick = function (event) {
        
            for (i = 0; i < 1; i++) {

                let userInput = +prompt('Введите первое число'),
                    userInput2 = +prompt('Введите второе число'),
                    userInput3 = prompt('Введите один из знаков * - + /'),
                    userOutput = document.getElementById('userOutput6');

                if (userInput3 == "+") {
                    result = userInput + userInput2;
                } else if (userInput3 == "-"){
                    result = userInput - userInput2;
                } else if (userInput3 == "*"){
                    result = userInput * userInput2;
                } else if (userInput3 == "/"){
                    result = userInput / userInput2;
                } else { 
                    result = 'Вы ввели неккоретное значение';
                }
                
                question = confirm(`Результат решения: ${result}. Хотите решить еще один пример?`);
                question? i-- :  userOutput.innerHTML = `Результат последнего решения: ${result}`;   
            }  

        // function calc (){

        //     let userInput = prompt('Введите первое число'),
        //         userInput2 = prompt('Введите второе число'),
        //         userInput3 = prompt('Введите один из знаков * - + /'),
        //         userOutput = document.getElementById('userOutput6');

        //     if (userInput3 == "+") {
        //         result = userInput + userInput2;
        //     } else if (userInput3 == "-"){
        //         result = userInput - userInput2;
        //     } else if (userInput3 == "*"){
        //         result = userInput * userInput2;
        //     } else if (userInput3 == "/"){
        //         result = userInput / userInput2;
        //     } else { 
        //         result = 'Вы ввели неккоретное значение';
        //     }
        //      question = confirm(`Результат решения: ${result}. Хотите решить еще один пример?`);
        //     question? calc() :  userOutput.innerHTML = `Результат последнего решения: ${result}`; 
        // } 
 
        // calc();

    };

    btn7.onclick = function (event) {
        let userInput = document.getElementById ('userInput7').value;
        let userInput_2 = document.getElementById ('userInput7_2').value;
        let userOutput = document.getElementById('userOutput7');
        let value = userInput.substr(userInput_2);

        for (i = 0; i < userInput_2; ){
            value += userInput[i];
            i++;
        }

        userOutput.innerHTML = `Число после сдвига: ${value}`;
    };

    btn8.onclick = function (event) {
        // let userInput = document.getElementById ('userInput8').value;
        let userOutput = document.getElementById('userOutput8'); 
        const week = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье',
            ];

           for ( i = 0 ; i < week.length; ){
              let value =  confirm(`${week[i]}. Хотите увидеть следующий день?`); 
                
                if ( i == week.length -1) {
                    i = 0;
                } else if (value){
                    i++;
                } else {
                    i = week.length;
                }
                }

        // userOutput.innerHTML = `Следующий день: ${day}.`; 
    };

    btn9.onclick = function (event) {
        let userOutput = document.getElementById('userOutput9'); 

        const numbers = [2, 3, 4, 5, 6, 7, 8, 9,];
        const multiplyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
        let value = [];
        let a = 0;

        for (i = 0; i < numbers.length; i++ ){

            for(b = 0; b < multiplyNumbers.length; b++){
                value = numbers[a] * multiplyNumbers[b];
                userOutput.innerHTML += `<div>${numbers[a]} * ${multiplyNumbers[b]} = ${value} </div>`;
            }
            a++;    
        }

    };

    btn10.onclick = function (event) {
        let  more = document.getElementById('btn+');
        let  equals = document.getElementById('btn=');
        let smaller = document.getElementById('btn-');
        let range = [];

        for (i = 0; i <= 1000; i++){
            range.push(i);
        }

        more.onclick = () =>{
            range = range.slice(range.length / 2, );
            userOutput10.innerHTML = `Ваше число: ${range[Math.floor(range.length / 2)]}?`;
        };

        smaller.onclick = () =>{
            range = range.slice(0, Math.floor(range.length / 2));
            userOutput10.innerHTML = `Ваше число: ${range[Math.floor(range.length / 2)]}?`;
        }; 

        equals.onclick = () =>{
            userOutput10.innerHTML = `Это было просто)) Хотите сыграть еще? Загадайте число посложнее ;)`;
        }



        userOutput10.innerHTML = `Ваше число: ${range[Math.floor(range.length / 2)]}?`;
    };