/* Defining Table
 INPUT:  
Get the pound value to convert to kilogram in the input box – x 
 
 OUTPUT: Display the converted value in kilograms and rounded to one decimal
*/ 

function convertToKilograms() {
    //INPUT A POUNDS VALUE FROM USER
    let x = parseFloat(document.getElementById('pounds').value)
    //PROCESS: CONVERT THE USER INPUT INTO A NUMBER
    let lbs = parseFloat(x);
    //PROCESS: CONVERT THE USER INPUT TO KILOGRAMS, ROUNDED TO ONE DECIMAL
    let kilograms = Math.round((x*0.453592)*10)/10;
    //OUTPUT: DISPLAY THE POUNDS VALUE TO KILOGRAMS
	
    document.getElementById('outputKilograms').innerHTML = kilograms;

}
