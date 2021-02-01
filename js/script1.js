/* Defining Table
 INPUT:  
Get the pound value to convert to kilogram in the input box – x 
 
 OUTPUT: Display the converted value in kilograms
*/ 

function convertToKilograms() {
    //INPUT
    let x = parseFloat(document.getElementById('pounds').value)
    //OUTPUT
	
    document.getElementById('outputKilograms').innerHTML = x*0.453;

}
