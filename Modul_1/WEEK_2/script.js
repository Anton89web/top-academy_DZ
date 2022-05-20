
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
    let userInput = +document.getElementById ('userInput').value;
    let userOutput = document.getElementById('userOutput'); 

    if (userInput < 12){
        value = 'ребенок';
    }   else if (userInput < 18 ) {
        value = 'подросток';
    }   else if (userInput >= 18 & userInput < 60 ) {
        value = 'взрослый';
    }   else if (userInput >= 60 ) {
        value = 'пенсионер';
    }   else {
        value = "ввели некорректное значение";
    }

    userOutput.innerHTML = `Вы ${value}`;
};

    btn2.onclick = function (event) {
    let userInput = +document.getElementById ('userInput2').value,
        userOutput = document.getElementById('userOutput2');

    const arr = [ ')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

        if (userInput < 10){
            simbol = arr[userInput];
        } else {
            simbol = "Вы ввели неверное значение";
        }

        userOutput.innerHTML = `На этой клавише расположен:"${simbol}"`;
    };



    btn3.onclick = function (event) {
    let userInput = document.getElementById ('userInput3').value;
    let userOutput = document.getElementById('userOutput3'); 

    if (userInput[0] == userInput[1] || userInput[0] == userInput[2] || userInput[1] == userInput[2]){
        verdict = 'В Вашем числе есть одинаковые цифры';
    }  else if ( userInput.length > 3) {
        verdict = "В Вашем числе слишком много цифр";
    }  else {
        verdict = "В Вашем числе нет одинаковых цифр";
    }

    userOutput.innerHTML = verdict;
};

    btn4.onclick = function (event) {
        let userInput = +document.getElementById ('userInput4').value;
        let userOutput = document.getElementById('userOutput4'); 

        let year = (userInput % 4 && userInput % 100)? 'Не Високоcный' : " Високосный";        
        userOutput.innerHTML = `Этот год: ${year}.`;
    };

    btn5.onclick = function (event) {
        let userInput = document.getElementById ('userInput5').value;
        let userOutput = document.getElementById('userOutput5'),
        value ="",
        polindrom ="";

        for (i = userInput.length - 1; i >= 0; i -- ) {
            polindrom += userInput[i];
            if ( polindrom == userInput){
                value = 'Палиндром';
            } else if ( userInput.length > 5 || userInput.length < 5 ){
                value = 'Введите правильное число';
            } else {
                value = 'Не палиндром';
            }
        }

        userOutput.innerHTML = `Ваше число: ${value}`;
    };   
    
    btn6.onclick = function (event) {
        let userInput = +document.getElementById ('userInput6').value;
        let userOutput = document.getElementById('userOutput6');
        let convert ="";
        const euroCheckbox = document.getElementById('EUR');
        const grivnaCheckbox = document.getElementById('UAN');
        const manatCheckbox = document.getElementById('AZN'); 
        const euro = 0.92;
        const grivna = 29.43;
        const manat = 1.70;
         
    
        if (euroCheckbox.checked){
            convert = (userInput * euro);
        } else if (grivnaCheckbox.checked){
            convert = (userInput * grivna);
        } else if ( manatCheckbox.checked){
            convert = (userInput * manat);
        } else {
            convert = "Вы ввели некоректное цисло";
        }


        userOutput.innerHTML = `${userInput}$ конвертируется в ${convert.toFixed(0)}`;
    };

    btn7.onclick = function (event) {
        let userInput = +document.getElementById ('userInput7').value;
        let userOutput = document.getElementById('userOutput7');

        if (userInput >= 200 && userInput <= 300){
            userInput -= (userInput * 3)/ 100;
        }   else if (userInput > 300 && userInput <= 500) {
            userInput -= (userInput * 5)/ 100;
        }   else if (userInput > 500 ) {
            userInput -= (userInput * 7)/ 100;
        }   else {
            amountPayable = "Вы ввели некорректное значение";
        }
    
        userOutput.innerHTML = `Сумма к оплате с учетом скидки: ${userInput}`;
    };

    btn8.onclick = function (event) {
        let userInput = +document.getElementById ('userInput8').value / Math.PI;
        let userInput_2 = +document.getElementById ('userInput8_2').value / 4;
        let userOutput = document.getElementById('userOutput8'); 
        let value = (userInput < userInput_2) ? 'поместится в этот квадрат' : 'не поместится в этот квадрат';
        console.log(userInput);

        userOutput.innerHTML = `Ваша окружность: ${value}.`; 
    };

    btn9.onclick = function (event) {
        let userOutput = document.getElementById('userOutput9'); 
        let checkbox = document.querySelectorAll('.checkbox');
        let bals = 0;

        if(checkbox[0].checked){
            bals = 2;
        }
        if(checkbox[4].checked){
            bals += 2;
        }
        if(checkbox[8].checked){
            bals += 2;
        }
        userOutput.innerHTML = ` Количество набранных баллов = ${bals}.`;
    };



    // ************************Не получилось*********************************
    btn10.onclick = function (event) {
        let date = document.getElementById ('userInput10').value.split('.');
        let userOutput = document.getElementById('userOutput10'); 
        let day = +date[0],
            month = +date[1],
            year = +date[2];


        if (month > 12){
            month = "Нет такого месяца";
            } else if ( month == 12){
            month = "01";
            } else if ( (day == 30 && month % 2 == 0) || day == 31 || (day == 28 &&  month == 02 && !year % 4) ){
            month += 1;
            } else {
            month =`0${month}`;
            }


         if (day < 9){
            day =`0${day+1}`;
         }  else if ( day == 30 && (month % 2 == 0) || day == 31 ){
            day = "01";
         }  else if ( day == 30 && (month % 2 == 1) || month == 8 ){
            day = "31";
         }  else if ( day > 31 ){
            day = "Нет такой даты";
        }  else if ( day == 28 && month == 02 && !year % 4 ){
            day = "29";
        }  else {
            day += 1;
        }

        if ( date == 31 && month == 12 ){
            year += 1;
        }


        userOutput.innerHTML = `Следующая дата: ${day}.${month}.${year}`;
    };

    // let date = prompt('Enter the date - day-month-year ');
    // date = date.split('-');
    // let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
    // oldDate.setDate(oldDate.getDate()+1);
    // alert(oldDate);