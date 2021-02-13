function compareResult() {
    /*assign variables to all inputs
    convert user's inputs into number */
    let x = parseFloat(document.getElementById("n1").value);
    let y = parseFloat(document.getElementById("n2").value);
    let result = parseFloat(document.getElementById("res").value);
    let operator = document.getElementById("ope").value;
    let resCompar;
    let display;
    /* Find which operator matches the operation used by the user with switch case 
    Compare the computer's result and the user's input result */

    switch (operator) {
        case "add":
            resCompar = x + y;
            
            break;
        case "sub":
            resCompar = x-y;
            
            break;
        case "mult":
            resCompar = x * y;
            
            break;
        case "div":
            resCompar = x / y;
            
            break;
    }
    if (resCompar == result) {

        display = "correct! 🏆"}

        else {
        display = "incorrect! 😢"
    };
    // display a message for the user to see if the input result is true or false
   
    document.getElementById("output").innerHTML = display
}
    
    
