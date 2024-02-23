// display property
// onClick event
// eval() function (evaluation)
// assignment operator => x+=y or x=x+y

// display characters
function characterDisplay(value) {
    tunjuk.value += value;
}

function clearDisplay() {
    tunjuk.value = "";
}

function calculate() {
    const kira2 = tunjuk.value;
    tunjuk.value = eval(kira2);
}
