/* Defining Table
 INPUT:  Give the value of 1 pound to kilogram
Get the pound value to convert to kilogram in the input box – x 
 PROCESSING: Convert the number x to kilogram by using a formula 
 OUTPUT: Display the converted value in kilograms
*/ 

function convertToKilograms() {
    let x = parseFloat(document.getElementById('pounds').value)
	
    document.getElementById('outputKilograms').innerHTML = x*0.453;

}
