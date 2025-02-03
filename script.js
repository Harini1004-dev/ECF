let selectedAmount = "";
let selectedType = "";
const donateButton = document.querySelector(".don-button");
const amountButtons = document.querySelectorAll(".don-amount");
const typeButtons = document.querySelectorAll(".don-type");

function updateDonateButton() {
    if (selectedAmount && selectedType) {
        donateButton.innerHTML = `<img src="Images/heart.png" alt="Heart Icon"> Faire un don de ${selectedAmount} (${selectedType})`;
    }
}

amountButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        selectedAmount = amountButtons[index].textContent.split("€")[0] + "€";
        updateDonateButton();
    });
});

typeButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        selectedType = typeButtons[index].textContent;
        updateDonateButton();
    });
});



const conteneurUn = document.querySelector(".testContainerUn");
const conteneurDeux = document.querySelector(".testContainerDeux");
const conteneurTrois = document.querySelector(".testContainerTrois");


function gererClic(conteneur, reponseCorrecte, messageCorrect, messageIncorrect) {
    const boutons = Array.from(conteneur.getElementsByTagName("button"));

    boutons.forEach((bouton) => {
        bouton.addEventListener("click", function () {
            conteneur.innerHTML = "";

            const message = document.createElement("div");
            if (bouton.textContent.trim() === reponseCorrecte) {
                message.textContent = messageCorrect;
                message.style.color = "green";
                message.style.border = "2px solid green";
                message.style.backgroundColor = "#EDFEF6";
            } else {
                message.textContent = messageIncorrect;
                message.style.color = "red";
                message.style.border = "2px solid red";
                message.style.backgroundColor = "#FFEDED";
            }

            message.style.padding = "10px";
            message.style.marginTop = "10px";

            conteneur.appendChild(message);
        });
    });
}


gererClic(
    conteneurUn,
    "Faux",
    "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
    "Erreur ! La réponse correcte est 'Faux'."
);

gererClic(
    conteneurDeux,
    "Faux",
    "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !",
    "Erreur ! La réponse correcte est 'Faux'."
);

gererClic(
    conteneurTrois,
    "Faux",
    "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux.",
    "Erreur ! La réponse correcte est 'Faux'."
);
