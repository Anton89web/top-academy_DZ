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
    

function firstTask() {
    const productUl = document.querySelector('.user-output');
    const btn = document.querySelector('.btn');
    const btnAdd = document.querySelector('#btnadd');
    const btnbuy = document.querySelector('#btnbuy');



class Product {
    constructor (name, number, purchas ){
        this.name = name;
        this.number = number;
        this.purchas = purchas;
    }
}

const listProduct = [
    {
        name: 'sugar',
        number: 5,
        purchas: 'ДА'
    },
    {
        name: 'banana',
        number: 9,
        purchas: 'НЕТ'
    },
    {
        name: 'tomato',
        number: 7,
        purchas: 'ДА'
    },
];

function sortlistProduct(arr) {
   return arr.sort((a, b) => a.purchas < b.purchas ? 1 : a.purchas == b.purchas? 0 : -1 );
}


function showListProduct(arr){
    
    for (i= 0; i < productUl.childNodes.length; ){
        productUl.firstChild.remove();
    }
    arr.forEach(element => {
        productUl.innerHTML += 
        `<li>${element.name.toUpperCase()}: ${element.number}шт. Куплен: <b>${element.purchas.toUpperCase()}</b></li>`;
    });
    
}      


btn.addEventListener('click', ()=> {
    sortlistProduct(listProduct);
    showListProduct(listProduct);  
} );

btnAdd.addEventListener('click', ()=> {
    let nameProduct = document.querySelector('.name-input').value;
    let numberProduct = +document.querySelector('.number-input').value;
    let purchasProduct = document.querySelector('.check').value;
    
    function checkName (arr, name, number){
        let check = false;

        arr.forEach(element => {
            if (element.name === name){
                element.number += number;
                check = true; 
            } 
        });
        return check;
    }

    function addNewProduct() {
        if (!checkName(listProduct, nameProduct, numberProduct)&& nameProduct && 
        nameProduct && purchasProduct){
            listProduct.push(new Product(nameProduct, numberProduct, purchasProduct));
        }
        sortlistProduct(listProduct);
        showListProduct(listProduct);
    }
    addNewProduct();
    
} );

btnbuy.addEventListener('click', ()=>{
    let nameProduct = document.querySelector('.name-input').value;
    
    function checkName (arr, name){
        let check = false;

        arr.forEach(element => {
            if (element.name === name){
                element.purchas = "Да";
                check = true; 
            } 
        });
        return check;
    }
        checkName(listProduct, nameProduct);
        sortlistProduct(listProduct);
        showListProduct(listProduct);

});
}

function secondTask() {

    const showCheck = document.querySelector('#btn2');
    const totalAmount = document.querySelector('#btn2-1');
    const expensivePurchase = document.querySelector('#btn2-2');
    const averageCost = document.querySelector('#btn2-3');
    const mountPoint = document.querySelector('#userOutput2');


    const checkOfProducts = [
        {
            name: 'sugar',
            number: 5,
            price: 89,
        },
        {
            name: 'bread',
            number: 3,
            price: 59,
        },
        {
            name: 'Toilet paper',
            number: 10,
            price: 83,
        },
        {
            name: 'Buckwheat',
            number: 8,
            price: 79,
        },
        {
            name: 'cookie',
            number: 4,
            price: 49,
        },
        {
            name: 'washing powder',
            number: 2,
            price: 549,
        },
    ];

    function removeMountPoint(point) {
        for (i= 0; i < point.childNodes.length; ){
            point.firstChild.remove();
        }
    } 

    showCheck.addEventListener('click', () => {
        removeMountPoint(mountPoint);
        function printCheck(arr, point) {
                arr.forEach(element => {
                    point.innerHTML += 
                    `<li><b>${element.name.toUpperCase()}</b> Куплено: ${element.number}шт. Цена ${element.price}р.</li>`;
                });
            }
        printCheck(checkOfProducts, mountPoint);
    });
    

    totalAmount.addEventListener('click', ()=> {
        function totalPurchaseAmount(arr, point) {
            let amount = 0;
            removeMountPoint(point);
    
                arr.forEach(element => {
                    amount += (element.price * element.number);
                });
            
                point.innerHTML += 
                    `<li><b>Общая сумма:</b> ${amount}р.</li>`;
        }
        totalPurchaseAmount(checkOfProducts, mountPoint);
    });

    expensivePurchase.addEventListener('click', ()=> {
        function expensivePurchase(arr, point) {
            
            removeMountPoint(point);
        
            arr.sort(
                (a, b) => (a.price * a.number) < (b.price * b.number) ? 1 : -1);
                
                mountPoint.innerHTML =
                `<li><b>Самая дорогая покупка:</b> ${arr[0].name.toUpperCase()}. Общая цена за ${arr[0].number}шт: ${arr[0].number * arr[0].price}p.</li>`;
            }

        expensivePurchase(checkOfProducts, mountPoint);
    });


    averageCost.addEventListener('click', ()=> {
        function averageCost(arr, point) {
            let amount = 0;
            removeMountPoint(point);
    
                arr.forEach(element => {
                    amount += (element.price * element.number);
                });
            
                point.innerHTML += 
                    `<li><b>Средняя стоимость 1 товара:</b> ${amount/arr.length}р.</li>`;
        }
        averageCost(checkOfProducts, mountPoint);
    });

}

function thirdTask() {

    const userInput = document.querySelector('#userInput3');
    const showString = document.querySelector('#btn3');
    const addStile = document.querySelector('#btn3-2');
    const mountPoint = document.querySelector('#userOutput3');

    class cotsructorStyles {
        constructor (name, value){
            this.name = name;
            this.value = value;
        }
    }

    const arrOfStyle = [
    new cotsructorStyles ('margin:', '20px 0'),
    new cotsructorStyles ('text-align:', 'center'),
    new cotsructorStyles ('font-size:','36px',),
    new cotsructorStyles ('color:', 'green',),
    new cotsructorStyles ('font-family:', 'fantasy',),
    new cotsructorStyles ('letter-spacing:', '3px',),
    new cotsructorStyles ('text-shadow:', '6px 6px 15px black',),
    new cotsructorStyles ('text-decoration:', 'underline'),
    ];

    function removeMountPoint(point) {
        for (i= 0; i < point.childNodes.length; ){
            point.firstChild.remove();
        }
    } 

    function printString(point, str) {
        point.textContent = `${str}`;
    }

    showString.addEventListener('click', () => {
        removeMountPoint(mountPoint);
        let str = userInput.value;
        
        printString(mountPoint, str);
    });
    
    addStile.addEventListener('click', () => {
        let str = userInput.value;
        removeMountPoint(mountPoint);
        printString(mountPoint, str);
        arrOfStyle.forEach(element => {
            mountPoint.style.cssText += `${element.name}${element.value}`;
            });
    });

}

function fourTask() {

    const numberOfStudents = document.querySelector("#userInput4_1");
    const nameOfFaculty = document.querySelector("#userInput4_2");
    const showAudiences = document.querySelector("#btn4");
    const showAudiencesForFaculty = document.querySelector("#btn4-1");
    const showAudiencesForGroup = document.querySelector("#btn4-2");
    const mountPoint = document.querySelector('#userOutput4');
    const sortSeatsBtn = document.querySelector('#btn4-3');
    const sortfacultyBtn = document.querySelector('#btn4-4');

    class audiences {
        constructor(name, seats, faculty)  {
            this.name = name;
            this.seats = seats;
            this.faculty = faculty;
        }
    }
    
    const audienceOfAcademy = [
        
        new audiences ('02', 17, 'WEB'),
        new audiences ('06', 15, 'PYTHON'),
        new audiences ('03', 18, 'GAMEDEV'),
        new audiences ('01', 14, 'WEB'),
        new audiences ('05', 11, 'PYTHON'),
        new audiences ('09', 10, 'WEB'),
        new audiences ('07', 20, 'GAMEDEV'),
        new audiences ('10', 19, 'WEB'),
        new audiences ('12', 13, 'GAMEDEV'),
        new audiences ('08', 16, 'PYTHON'),
        new audiences ('11', 12, 'GAMEDEV'),
        new audiences ('04', 20, 'PYTHON'),
    ];
    
    function outputAudiences(arr) {
        removeoutput(mountPoint);
        arr.forEach(element => {
            mountPoint.insertAdjacentHTML('beforeend',
            `<ul>
            <li>Название аудитории: <b>${element.name}</b>.</li>
            <li>Количество мест в аудитории: <b>${element.seats}</b>.</li>
            <li>Для факультета: <b>${element.faculty}</b>.</li>
            </ul>`);
        }
        );  
    }

    function sortSeats (arr){
        let newArr = [...arr];
        newArr.sort((a, b) => a.seats > b.seats ? 1 : a.seats == b.seats ? 0 : -1);
        outputAudiences(newArr);  
    }

    function sortName(arr){
        let newArr = [];
        newArr = [ ...arr];
        newArr.sort((a, b) => a.name > b.name ? 1 : a.name == b.name ? 0 : -1);
        outputAudiences(newArr);  
    }

    function removeoutput (a){
        let arr = a.childNodes;
        for (i= 0; i < arr.length; ){
            a.firstChild.remove();
        }
    }

    function outputAudiencesForFaculty (arr){

        const value = nameOfFaculty.value.toUpperCase();
        let newArr = [];
        removeoutput(mountPoint);
       for (const i of arr) {
           if (i.faculty === value) newArr.push(i);
           }
        outputAudiences(newArr);
    }

    function audiencesForGroup (arr){

        let numberGroup = numberOfStudents.value;
        let nameFaculty = nameOfFaculty.value.toUpperCase();
        let newArr = [];

        for (const i of arr) {
            if (nameFaculty === i.faculty && numberGroup <= i.seats){
                newArr.push(i);
            } 
        }
        outputAudiences(newArr);
        console.log(newArr);
    }

    

    showAudiences.addEventListener('click', () => {
        outputAudiences(audienceOfAcademy);
    });

    showAudiencesForFaculty.addEventListener('click', ()=> {
        outputAudiencesForFaculty(audienceOfAcademy);
    });

    showAudiencesForGroup.addEventListener('click', ()=> {
        audiencesForGroup(audienceOfAcademy);
    });

    sortSeatsBtn.addEventListener('click', ()=> {
        sortSeats(audienceOfAcademy);
    });

    sortfacultyBtn.addEventListener('click', ()=> {
        sortName(audienceOfAcademy);
    });
    












}

firstTask();
secondTask();
thirdTask();
fourTask();
