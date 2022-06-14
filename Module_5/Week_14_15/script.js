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
    

}


function secondTask() {
    

}

function thirdTask() {
   

}

function fourTask() {
    
    
}


function fiveTask() {
    

}

function fiveTask() {
    

}function sixTask() {
    

}




firstTask();
secondTask();
thirdTask();
fourTask();
fiveTask();
sixTask()