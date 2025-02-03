function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const errorUsername = document.getElementById("error-username");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");

    errorUsername.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMessage.innerHTML = "";

    let isValid = true;
    if (username === "") {
        alert("Erreur : Le nom d'utilisateur est obligatoire.");
        errorUsername.innerHTML = "Le nom d'utilisateur est obligatoire.";
        isValid = false;
    }

    if (email === "") {
        alert("Erreur : L'adresse e-mail est obligatoire."); 
        errorEmail.innerHTML = "L'adresse e-mail est obligatoire.";
        isValid = false;
    } else if (!email.includes("@")) {
        alert("Erreur : L'adresse e-mail doit contenir un @."); 
        errorEmail.innerHTML = "L'adresse e-mail doit contenir un @.";
        isValid = false;
    }

  
    if (message === "") {
        alert("Erreur : Un message est obligatoire."); 
        errorMessage.innerHTML = "Un message est obligatoire.";
        isValid = false;
    }

    
    if (isValid) {
        alert("Le formulaire a bien été soumis.");
    }

    return isValid;
}

