document.getElementById("generer-ticket").addEventListener('click', validationFormulaire);
document.getElementById("generer-ticket").addEventListener('sumbit', validationFormulaire);

const refFichierImporter = document.getElementById("file-input");
const refPrenom = document.getElementById("prenom")
const refEmail = document.getElementById("email")
const refGithub = document.getElementById("github")

const refPrenomEnTete = document.getElementById("nom-ticket")
const refPrenomTicket = document.getElementById("nom-ticket2")

const refEmailTicket = document.getElementById("email-ticket")
const refGithubTicket = document.getElementById("afficher-github")
refImageTicket = document.getElementById("image-ticket")
function validationFormulaire(e) {
    console.log("validation du formulaire");
    e.preventDefault();
    // le but est de prendre les données et de la afficher sur le ticket
    // recuperer les valeurs des champs
    const prenom = refPrenom.value;
    const email = refEmail.value;
    const github = refGithub.value;
    const fichier = refFichierImporter.files[0];

    // varifier que le champs ne sont pas vide
    if (prenom === "" || email === "" || github === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    // gerer l'image
    // verifir si le fichier est une image
    if (fichier) {
        // file reaer permet de lire le contenu d'un fichier
        // https://www.w3.org/TR/FileAPI/
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader

        const imageUtilisateur = new FileReader();
        imageUtilisateur.onload = function (e) {
            refImageTicket.src = e.target.result;
        }
        imageUtilisateur.readAsDataURL(fichier);
    } else {
        // si le fichier n'est pas une image, on met une image par defaut
        refImageTicket.src = "../assets/images/image-avatar.jpg";
    }
    // afficher le ticker
    document.getElementById("display-ticket").removeAttribute("hidden");
    // ajouter hidden sur le formulaire
    document.getElementById("ticket-form").setAttribute("hidden", "true");

    // afficher les valeurs sur le ticket
    refPrenomTicket.innerHTML = prenom;
    refEmailTicket.innerHTML = email;
    refGithubTicket.innerHTML = github;
    refPrenomEnTete.innerHTML = prenom;
    // afficher 'image-ticket' sur le ticket
}