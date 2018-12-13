
function VisitCounter(){

    var visit = GetCookie("joined");  
    var visits;
    if (visit) { 
        visits++; 
        document.getElementById("amountOfVisits").innerHTML = "you have visited this game " + visits + " times";
    }
    }