function welcome() {
    var person = prompt("Please enter your name for a personalised welcome message",);
    if (person != null) {
        document.getElementById("displayMessage").innerHTML ="Hi " + person + "! Welcome to the camp Canada website - we hope you enjoy it!";
    }
}
