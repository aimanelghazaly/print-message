// Sélection de l'élément d'entrée (input) par son identifiant
var inputEle = document.getElementById("input");

// Sélection de l'élément bouton (button) par son identifiant
var buttonELe = document.getElementById("btn");

// Sélection de l'élément message (msg) par son identifiant
var msgE1 = document.getElementById("msg");

// Ajout d'un écouteur d'événements pour le clic sur le bouton
buttonELe.onclick = function () {
    // Récupération de la valeur de l'élément d'entrée
    var inputValue = inputEle.value;

    // Vérification si la valeur n'est pas vide
    if (inputValue !== "") {
        // Affichage de la valeur dans l'élément message
        msgE1.innerHTML = inputValue;

        // Réinitialisation de la valeur de l'élément d'entrée
        inputEle.value = "";
    }
};
