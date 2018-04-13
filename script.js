//Provided function
function flip(){
  return Math.random() >= 0.5;
}

function randomNumber(n){

    var randomNumber = n;

    do {
        var randomFromDate = parseInt(new Date().getTime().toString().split('').pop()) / 10;
        randomNumber = randomNumber * randomFromDate;

        var evaluate = Math.floor(randomNumber)

    } while(flip() && !(evaluate >= 0 && evaluate <= n));

    return Math.floor(randomNumber);
}

function getNumber(){

    var number = parseInt(document.getElementById("inputText").value);

    if(isNaN(number)){
        alert("Please enter a number between 0 and 1,000,000");
        return;
    }

    if(!(number >= 0 && number <= 1000000)) {
        alert("Please enter a number between 0 and 1,000,000");
        return;
    }

    alert("Your random number is " + randomNumber(number));   
}
