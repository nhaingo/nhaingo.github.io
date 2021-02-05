/* Defining Table
 INPUT:  Have the user enter numbers in boxes 'number1'  and 'number2' for x and y
 PROCESSING: Create a formula to get the sum of 'number1' and 'number2'
 OUTPUT: Display the final result to show the sum of x and y
*/ 

function addNumbers() {
	//INPUT
	 let x = parseFloat(document.getElementById('number1').value);
	 let y = parseFloat(document.getElementById('number2').value);
	//PROCESSING
	 let sum = x + y;
	//OUTPUT
	 document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}