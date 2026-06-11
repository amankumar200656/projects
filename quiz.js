let form = document.querySelector("#quizForm");
let result = document.querySelector("#result");

quizForm.addEventListener("submit", function(dets){
    dets.preventDefault();
    let score = 0;

    if(form.q1.value === "b"){
        score++;
    }
    if(form.q2.value === "a"){
        score++;
    }
    if(form.q3.value === "b"){
        score++;
    }

    alert("Your Score is " + score + "/3");

    // result.innerHTML = "Your Score is " + score + "/3";


});