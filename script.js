function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var biggerThanZero = parseInt(principal) > 0;
    var year = new Date().getFullYear() + years;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
    }

}

//update ther ate value
function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

