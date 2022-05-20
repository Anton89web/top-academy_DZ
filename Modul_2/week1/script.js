
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
    let userInput = document.getElementById('userInput').value;
    let userOutput = document.getElementById('userOutput'); 
    
    // автомобиль (производитель,
    //     модель, год_выпуска, средняя_скорость);
        
        let car = {
          "manufacturer" : "Lada",
          "model" : 2110,
          "year" : '1980г',
          "speed" : 85,
          "information" : function(){
            return this.manufacturer + ' '
              + this.model + ' '
              + this.year + ' '
              + this.speed + ' ';
          },
          "time" : function(distance){
              let time = (distance / this.speed).toFixed(1);
              return time;
          }
        };

        userOutput.innerHTML = `${car.information()}км/ч <br> Необходимое время для преодоления расстояния: ${car.time(userInput)}ч.`;

};


    btn2.onclick = function (event) {
    let userInput = +document.getElementById('userInput2').value,
        userInput2 = +document.getElementById('userInput2_1').value,
        userInput3 = +document.getElementById('userInput2_3').value,
        userInput4 = +document.getElementById('userInput2_4').value,
        userOutput = document.getElementById('userOutput2');
        
        function Fraction(numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;
            this.add = function(fraction){
              if (fraction instanceof Fraction) {
                let numerator1 = this.numerator * fraction.denominator;
                let numerator2 = this.denominator * fraction.numerator;
                let denominator = this.denominator * fraction.denominator;
                let resultFraction = new Fraction(numerator1 + numerator2, denominator);
                return resultFraction //.reduction();
              }
              return null;
            };
            this.sub = function(fraction){
              if (fraction instanceof Fraction) {
                let numerator1 = this.numerator * fraction.denominator;
                let numerator2 = this.denominator * fraction.numerator;
                let denominator = this.denominator * fraction.denominator;
                let resultFraction = new Fraction(numerator1 - numerator2, denominator);
                return resultFraction; //.reduction();
              }
              return null;
            }

            this.mul = function(fraction){
                if (fraction instanceof Fraction) {
                  let numerator1 = this.numerator * fraction.numerator;
                  let denominator1 = this.denominator * fraction.denominator;
                  let resultFraction = new Fraction (numerator1, denominator1);
                  return resultFraction;
                }
                return null;
              };

              this.div = function(fraction){
                if (fraction instanceof Fraction) {
                  let numerator1 = this.numerator * fraction.denominator;
                  let denominator1 = this.denominator * fraction.numerator;
                  let resultFraction = new Fraction (numerator1, denominator1);
                  return resultFraction;
                }
                return null;
              };  


            this.reduction = function(){
              for (i = 2; i < 10; i++){
                if (this.numerator % i == 0 && this.denominator % i == 0){
                  let a = this.numerator / i;
                  let b = this.denominator / i; 
                  return `${a}/${b}`;
                }
              }
              return `${this.numerator}/${this.denominator}`;
            };
          
          }  
          
          a = new Fraction(userInput, userInput2);
          b = new Fraction(userInput3, userInput4);
          c = a.add(b);
          d = a.sub(b);
          f = a.mul(b);
          j = a.div(b);

        userOutput.innerHTML = `Сложение:${c.reduction()}<br> 
        Вычетание:${d.reduction()}<br> 
        Умножение:${f.reduction()}<br> 
        Деление:${j.reduction()}`;
    
  };







    btn3.onclick = function (event) {
    
    let userHours = document.getElementById ('userInput3').value;
    let userMinutes = document.getElementById ('userInput3_1').value;
    let userSeconds = document.getElementById ('userInput3_2').value;
    let userOutput = document.getElementById('userOutput3');

    const clock = {
      days: 0,
      hour: 0,
      minute: 0,
      second: 0,
      
      addsecond: (s) =>{
        clock.hour += Math.floor(s / 3600);
        clock.minute += Math.floor(s % 3600 / 60) ;
        clock.second += s % 3600 % 60;
      },
      addminute: (m) =>{
        clock.days += Math.floor(m / 1440);
        clock.hour += Math.floor(m % 1400 / 60);
        clock.minute += Math.floor(m % 1400 % 60);
      },
      addhour: (h) => {
        clock.days += Math.floor(h / 24);
        clock.hour += Math.floor(h % 24);
      },


      showTime: (d, h, m, s) => {
        if (d){
       userOutput.innerHTML = `Время:${d}д ${h}ч:${m}м:${s}с`;
        } else {
          userOutput.innerHTML = `Время:${h}ч:${m}м:${s}с`;
        }
      },
    };

      clock.addsecond(userSeconds);
      clock.addminute(userMinutes);
      clock.addhour(userHours);
      clock.showTime(clock.days, clock.hour, clock.minute, clock.second);
    };

  



    