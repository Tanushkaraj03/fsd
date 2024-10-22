function showCapital(){
    var select= document.getElementById("country");
    var capitalSpan=document.getElementById("capital");
    var selectedCountry=select.value;
    
    switch(selectedCountry) {
        case "India":
            capitalSpan.innerText="Delhi";
            break;
        case "UAE":
            capitalSpan.innerText="Abu Dhabi";
            break;
        default:
            capitalSpan.innerText="";
    }
}