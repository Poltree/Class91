function getScore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>Score : " + score + "</h1>";
}
function Back(){
    window.location = "Activity1.html";
}