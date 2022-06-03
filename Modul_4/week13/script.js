let pagination = document.getElementById('pagination');
pagination.onclick = function (event) {
    if (event.target.type === "button") {
        let numberOfQuestion = event.target.dataset.question;
        let activeQuestion = document.getElementById(numberOfQuestion);
        let questions = document.getElementsByTagName('form');
        for (let i = 0; i < questions.length; i++) {
            questions[i].style.display = 'none';
        }
        activeQuestion.style.display = "block";
    }
};


function firstTask() {
    const line = document.querySelector('.treckbar__line'),
        pointer = document.querySelector('.treckbar__pointer');
    line.addEventListener('click', (event) => {
        pointer.style.cssText = `left:${event.offsetX-7}px`;
    });
}


function secondTask() {
    const aImg = ['img/img_1.jpeg', 'img/img_2.jpeg', 'img/img_3.jpeg', 'img/img_4.jpeg', 'img/img_5.jpeg', ],
        carouselDiv = document.querySelector('.carousel__img'),
        btnLeft = document.querySelector('.carousel__btn-left'),
        btnRight = document.querySelector('.carousel__btn-right');
    let i = 0;

    function changeImg(i) {
        carouselDiv.style.cssText = `background:url(${aImg[i]}) center center/cover no-repeat`;
    }

    btnRight.addEventListener('click', () => {
        i < aImg.length - 1 ? i++ : i;
        changeImg(i);
    });

    btnLeft.addEventListener('click', () => {
        i > 0 ? i-- : i;
        changeImg(i);
    });

    
    function startCarusel (){
        var interval = setInterval(() => {
            i < aImg.length - 1 ? changeImg(++i) : changeImg(i = 0);
        }, 2000);
    }

    [btnLeft, btnRight].forEach(e => {
        e.addEventListener('mouseover', () => clearInterval(interval));
        e.addEventListener('mouseout', () => startCarusel());
    });

    startCarusel();
}

function thirdTask() {
    const titles = document.querySelectorAll('.information__title');

    titles.forEach(e => e.addEventListener('click', (event) => {
        titles.forEach(e => e.nextElementSibling.classList.remove('information__active'));
        e.nextElementSibling.classList.add('information__active');
        // event.target.nextElementSibling.remove('information__active');
    }));
}

function fourTask() {
    const mountPoint = document.querySelector('.news__block'),
        wrapper = document.querySelector('.wrapper__text'),
        aNews = [{
                title: '<h5 class="news__title">Илон Маск: Tesla покажет рабочий прототип человекоподобного робота в конце сентября</h5>',
                text: `<p class="news__text">Илон Маск сообщил в своём аккаунте Twitter, что в этом году Tesla может показать рабочий прототип человекоподобного робота Tesla Bot, также известного как Optimus. Презентация состоится в рамках мероприятия Tesla AI Day 30 сентября 2022 года.
                В прошлом году на презентации Tesla AI Day Илон Маск представил улучшенную систему автопилота электромобилей Tesla, показал суперкомпьютер Dojo и анонсировал выпуск человекоподобного робота. На самом мероприятии предприниматель ограничился рендерами устройства и пригласил на сцену человека в костюме робота.
                В этом году ожидалось, что конференция Tesla AI Day пройдет 19 августа, но Илон Маск в своем аккаунте Twitter сообщил, что мероприятие переносится на 30 сентября, так как именно к этому времени команда разработчиков может успеть подготовить рабочий прототип робота Tesla Optimus.</p>`
            },
            {
                title: '<h5 class="news__title">Исследователи создали API для диагностики депрессии по голосу</h5>',
                text: `<p class="news__text">Стартап Kintsugi из США создал алгоритм для обнаружения признаков депрессии по голосу. Авторы надеются, что технология облегчит диагностику депрессии даже в случае лёгкой или средней степени заболевания.

                Как объясняют основательницы компании Грейс Чанг и Рима Сейилова-Олсон, у людей, которые чувствуют себя подавленными, как правило, более глухой и ровный голос, они говорят медленно и с паузами. По словам Сеиловой-Олсон, этот симптом депрессии встречается независимо от языка или культуры и, по-видимому,  может считаться универсальным. Причина кроется в психомоторной заторможенности, в замедлении мыслительных и мышечных движений, которую психиатры замечат у пациентов с тяжёлой депрессией. 
                
                Проконсультировавшись с 200 психиатрами, разработчицы пришли к выводу, что хорошим способом диагностики состояния может стать дневник эмоций. Они создали приложение, которое позволяет вести такой дневник с использованием голосовых заметок. 
                
                Дневники пациентов позволили собрать базу данных из десятков тысяч голосов для обучения нейросети. Разработанное решение измеряет вероятность депрессии по двум шкалам, PHQ-9 и GAD-7, которые широко используются в психиатрии. Чанг и Сейилова-Олсон отмечают, что инструмент работает как команда психиатров, но гораздо чувствительнее: он может выявить заболевание в легкой или средней степени.
                </p>`
            },
            {
                title: '<h5 class="news__title">Apple может анонсировать выход собственной поисковой системы</h5>',
                text: `<p class="news__text">Блогер Роберт Скобл пишет в Twitter, что ожидает запуск поискового сервиса Apple в следующем году. Он отмечает, что данное предположение основано на разговорах с разными источниками. Скобл говорит, что это будет самым дорогим запуском продукта за всё время. По мнению блогера, поисковик анонсируют не на выставке WWDC, которая начнётся 6 июня, а в январе следующего года
                компания заработала $210 млрд.

                По мнению журналиста TechRadar, количество устройств с iOS и Safari достигло критической массы, этот фактор может помочь Apple успешно конкурировать с Google в сфере поиска.

                В течение многих лет Apple получала прибыль от сделки, которая предусматривает установку по умолчанию поисковой системы Google в Safari. В августе прошлого года Google заплатил за это $15 млрд, а в текущем году это значение может вырасти до $18-20 млрд, полагают аналитики. Январский иск против Google и Apple демонстрирует, что соглашение между компаниями предполагает отказ Apple от разработки своей поисковой системы.

                Автор полагает, если Apple расторгнет сделку с Google, то миллиардная аудитория Safari стала бы базой для дальнейшего развития поисковика. Что, вероятно, станет поводом для антимонопольного расследования.</p>`
            },
            {
                title: '<h5 class="news__title">Apple впервые перенесёт часть производства iPad за пределы Китая</h5>',
                text: `<p class="news__text">Apple перенесёт часть производства iPad из Китая из-за сбоев в поставках,
                вызванных коронавирусными ограничениями во многих промышленных центрах страны, включая
                Шанхай и Шэньчжэнь.
                Китайская BYD, крупный поставщик iPad, откроет свой завод по производству планшетов во
                Вьетнаме, сообщает Nikkei Asia. iPad станет вторым продуктом, выпуск которого начнётся в
                этой стране, после AirPods Pro 2. Apple также попросила своих китайских поставщиков сделать
                запасы компонентов, таких как печатные платы и микросхемы.
                Многомесячный локдаун в Шанхае усилил перебои с поставками, вызванные нехваткой полупроводников. В апреле глава Apple Тим Кук подсчитал, что эти ограничения обойдутся компании в сумму от 4 до 8 миллиардов долларов. У половины ведущих китайских поставщиков Apple производства находятся на территориях, где местные власти объявили карантин. Всего у компании в стране 200 крупных поставщиков и ряд партнёров поменьше, которые изготавливают дисплеи, платы, батареи и аудиокомпоненты.

                Apple задумывалась о переносе части производства из Китая ещё в 2019 году: это позволило бы ей уменьшить зависимость от решений местных регуляторов и отношений между Китаем и США, но, как сообщала The Wall Street Journal, процесс застопорился из-за пандемии. В 2017 году компания перенесла часть производства iPhone на завод Foxconn в Индии, но почти 90% продукции по-прежнему производится в Китае. </p>`
            }
        ];
    let i = 0;

    wrapper.addEventListener('scroll', () => {
        const documentRect = mountPoint.getBoundingClientRect();
        if (documentRect.bottom <= 950) {
            mountPoint.insertAdjacentHTML('beforeend', `${aNews[i].title}${aNews[i].text}`);
            i < aNews.length -1 ? i++ : i = 0;
        }
    });
    
}




function fiveTask() {
    
    const btn = document.querySelector('.input__btn'),
          month = document.querySelector('.input__month'),
          year = document.querySelector('.input__year'),
          textMonth = document.querySelector('.date__month'),
          textYear = document.querySelector('.date__year'),
          aMonths = ['', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']; 
    function createCalendar(elem, year, month) {

        let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
        let d = new Date(year, mon);
  
        let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  
        // пробелы для первого ряда
        // с понедельника до первого дня месяца
        // * * * 1  2  3  4
        for (let i = 0; i < getDay(d); i++) {
          table += '<td></td>';
        }
  
        // <td> ячейки календаря с датами
        while (d.getMonth() == mon) {
          table += '<td>' + d.getDate() + '</td>';
  
          if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
          }
  
          d.setDate(d.getDate() + 1);
        }
  
        // добить таблицу пустыми ячейками, если нужно
        // 29 30 31 * * * *
        if (getDay(d) != 0) {
          for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
          }
        }
  
        // закрыть таблицу
        table += '</tr></table>';
  
        elem.innerHTML = table;
    }
  
      function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day == 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    }

    function changeDate (month, year){
        textMonth.textContent = `${aMonths[month]}`;
        textYear.textContent = `${year}г`;
    }

    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        createCalendar(calendar, +year.value, +month.value);
        changeDate( month.value, year.value);
    });

    createCalendar(calendar, 2022, 6);

}




firstTask();
secondTask();
thirdTask();
fourTask();
fiveTask();