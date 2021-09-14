function hide(){
    document.getElementById("output").style.visibility = "none";
    console.log("im working your just stupid :P")
}


function addUser(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game.html"
}

function check(){
    Answer = document.getElementById("Answer").value;

    localStorage.setItem("Answer", Answer);

}

function Send(){
    console.log("this function is working");
   number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer= parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + " x " + number_2 + "<h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'></button>"

    row = question_number + input_box + check_button
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

    localStorage.setItem("number_1", number_1);
    localStorage.setItem("number_2", number_2);

    document.getElementById("output").style.visibility = "true";

}