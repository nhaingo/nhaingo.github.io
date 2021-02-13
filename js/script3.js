function footWear() {
   let weather = document.getElementById("wea").value;
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

    document.getElementById("output").innerHTML = "You should wear " + shoes
}