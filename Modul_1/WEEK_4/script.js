
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
    let userInput = document.getElementById ('userInput').value;
    let userInput2 = document.getElementById ('userInput1_2').value;
    let userOutput = document.getElementById('userOutput'); 

     function comparison (a, b){
         if (a < b){
            value = '-1 Первое число меньше, чем второе';
         } else if (a > b){
            value = '1 Первое число больше, чем второе';
         } else {
            value = '0 Числа равны.';
         }
         return value;
     }


    userOutput.innerHTML = comparison(userInput, userInput2);
};

// Пытался решить сам, не получилось. Воспользовался готовым решением
    btn2.onclick = function (event) {
    let userInput = +document.getElementById('userInput2').value,
        userOutput = document.getElementById('userOutput2');
        
        function factorial (n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }  
        userOutput.innerHTML = factorial(userInput);
    };


    btn3.onclick = function (event) {
    let userInput = document.getElementById ('userInput3').value;
    let userOutput = document.getElementById('userOutput3');
    let value = " "; 
    
         function concate (){
            for (i = 0; i <= userInput.length-1; i++){
                if ( userInput[i] > 0 && userInput[i] <= 9){
                    value += userInput[i];
                } else if (userInput[i] === "0"){
                    value += "0";
                }
        }
        }
        concate();
    userOutput.innerHTML = value;
};

    btn4.onclick = function (event) {
        let userInput = +document.getElementById ('userInput4').value;
        let userInput_2 = +document.getElementById ('userInput4_1').value;
        let userOutput = document.getElementById('userOutput4'); 

        function area (){
            if (userInput && userInput_2){
                userOutput.innerHTML = `Площадь вашего прямоугольника = ${userInput * userInput_2}`;
            } else {
               userInput ? userOutput.innerHTML = `Площадь вашего квадрата = ${userInput ** 2}` : userOutput.innerHTML = `Площадь вашего квадрата = ${userInput_2 ** 2}`;
            }
        }
        area();
    };

    btn5.onclick = function (event) {
        let userInput = +document.getElementById ('userInput5').value;
        let userOutput = document.getElementById('userOutput5');
        
        function name (x){
            const arr = [];
            let value = 0;
            for (i = 1; i < x; i++ ) {
                x % i == 0 ? arr.push(i) : '';
            }
            arr.forEach(function(i){
               value += i;
            });
            
            value === x? userOutput.innerHTML = `Вы ввели совершенное число`: userOutput.innerHTML = `Вы ввели не совершенное число`;
        }        
        name(userInput);
    };   
    
    btn6.onclick = function (event) {

        let userInput = +document.getElementById('userInput6').value;
        let userInput2 = +document.getElementById('userInput6_2').value;
        let userOutput = document.getElementById('userOutput6');
        const range = [];
        const arr3 = [];
            
            for (i = userInput; i <= userInput2; i++){
                range.push(i); 
            }

            function name (x){
                let arr = [];
                let value = 0;
                for (i = 1; i < x; i++ ) {
                    x % i == 0 ? arr.push(i) : '';
                }
                arr.forEach(function(i){
                   value += i;
                });
                
                value === x? arr3.push(x) : '' ;
            }

            range.forEach(function(element){
                name(element);
            });

            userOutput.innerHTML = `В вашем диапазоне совершенные числа: ${arr3}`;
    };

    btn7.onclick = function (event) {
        let userInput = document.getElementById ('userInput7').value.split(', ');
        let userOutput = document.getElementById('userOutput7');
        
        const time = function (arr){
            if ( arr.length == 3 && arr[0] <= 24 && arr[1] <= 60 && arr[2] <= 60){
                userOutput.innerHTML = `Время: ${arr[0]}ч:${arr[1]}м:${arr[2]}с`;  
            } else if ( arr.length == 2 && arr[0] <=24 && arr[1] <= 60 ){
                userOutput.innerHTML = `Время: ${arr[0]}ч:${arr[1]}м:00с`;  
            } else if ( arr.length == 1 && arr[0] <= 24) {
                userOutput.innerHTML = `Время: ${arr[0]}:00м:00с`;  
            } else {
                userOutput.innerHTML = `Вы ввели неверное время`;  
            }
        };
        time (userInput);
    };

    btn8.onclick = function (event) {
        let userInput = document.getElementById ('userInput8').value;
        let userOutput = document.getElementById('userOutput8'); 
        const arr = userInput.split(', ');
        

        const time = () =>{
            if ( arr.length == 3 && arr[0] <= 24 && arr[1] <= 60 && arr[2] <= 60){
                userOutput.innerHTML = `Время в секундах: ${arr[0]*3600+arr[1]*60+(+arr[2])}`;  
            } else if ( arr.length == 2 && arr[0] <=24 && arr[1] <= 60 ){
                userOutput.innerHTML = `Время в секундах: ${arr[0]*3600+arr[1]*60}`;  
            } else if ( arr.length == 1 && arr[0] <= 24) {
                userOutput.innerHTML = `Время: ${arr[0]*3600}`;  
            } else {
                userOutput.innerHTML = `Вы ввели неверное время`;  
            }
        };
        time ();
    };

    btn9.onclick = function (event) {
        let userOutput = document.getElementById('userOutput9');
        let userInput = document.getElementById ('userInput9').value;
        

        function time (a){
            let hour = Math.floor(a / 3600);
            let minute = Math.floor(a % 3600 / 60) ;
            let second = a % 3600 % 60;
            userOutput.innerHTML = `Время: ${hour}ч:${minute}м:${second}с`;  
        }

        time (userInput);
    
    };

    btn10.onclick = function (event) {
        let  a = document.getElementById('userInput10').value.split(', ');
        let  b = document.getElementById('userInput10_1').value.split(', ');
        let userOutput = document.getElementById('userOutput10');
        let difference = time(a) - time(b);

        function time (arr){
            let value = 0;
            if ( arr.length == 3 && arr[0] <= 24 && arr[1] <= 60 && arr[2] <= 60){
               value  = arr[0]*3600+arr[1]*60+(+arr[2]);  
            } else if ( arr.length == 2 && arr[0] <=24 && arr[1] <= 60 ){
                value = arr[0]*3600+arr[1]*60;  
            } else if ( arr.length == 1 && arr[0] <= 24) {
                value = arr[0]*3600;  
            } else {
                userOutput.innerHTML = `Вы ввели неверное время`;
            }
            return value;
        }

        function time2 (a){
            let hour = Math.floor(a / 3600);
            let minute = Math.floor(a % 3600 / 60) ;
            let second = a % 3600 % 60;
            userOutput.innerHTML = `Время: ${hour}ч:${minute}м:${second}с`;  
        }
        time2(difference);
    };