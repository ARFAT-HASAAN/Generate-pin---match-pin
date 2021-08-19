function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    } else {
        console.log("arekta pata")
        return getpin();

    }
}

function generatePin() {

    const pin = getpin();
    const pininput = document.getElementById('pin-input');
    pininput.value = pin;
}

document.getElementById('calcValue').addEventListener('click', function(event) {

    const number = event.target.innerText
    const calcInput = document.getElementById('input-Form');


    if (isNaN(number)) {

        if (number == 'C') {
            calcInput.value = '';

        }

    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }




})

// match pin 

function matchPin() {
    const generatePin = document.getElementById('pin-input').value;
    const matchInput = document.getElementById('input-Form').value;

    const succesMsg = document.getElementById('succes-msg');
    const errorMsg = document.getElementById('error-msg');


    if (generatePin == matchInput) {
        succesMsg.style.display = "block";
        errorMsg.style.display = "none";


    } else {
        errorMsg.style.display = "block";
        succesMsg.style.display = "none";

    }


}

let coount = 0;
console.log('coount' + 1);