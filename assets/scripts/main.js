let premierNombre = document.getElementsByName("premierNombre")[0]
let deuxiemeNombre = document.getElementsByName("deuxiemeNombre")[0]
let categorie = document.getElementById("categorie")
let resultat = document.getElementsByName("resultat")[0]


function calculIMC(){
   
    
    let result = parseFloat(premierNombre.value) / Math.pow(parseFloat(deuxiemeNombre.value), 2)
    if (result < 18.5) {
        categorie.innerHTML = "En sous poids"
    }else if(result >= 18.5 && result <= 24.9){
        categorie.innerHTML = "Normal"
    }else if(result >= 25.0 && result <= 29.9){
        categorie.innerHTML = "Sur-poids"
    }else {
        categorie.innerHTML = "Obésité"
    }
    
    resultat.value = result

}