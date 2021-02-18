function footWear() {
    //Input program to assign weather as variable 
   let weather = document.getElementById("wea").value;
   //Process: Use switch case to test user's choice
   let shoes;
   switch (weather) {
    case "hot":
        shoes = "SANDALS 👡!!";
        
        break;
    case "rain":
        shoes = "GALOSHES!!";
        
        break;
    case "snow":
        shoes = "BOOTS 👢!!";
        
        break;
    default:
        shoes = "SHOES 👢👡👟👠👞!!"
        break;
    }
    // Output the result and alert the users with a specific message for each selection

    document.getElementById("output").innerHTML = "You should wear " + shoes
}