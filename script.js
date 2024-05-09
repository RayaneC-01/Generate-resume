// Sélectionner le bouton de génération du CV
const generateBtn = document.getElementById('generate-btn');

// Ajouter un écouteur d'événements sur le clic du bouton
generateBtn.addEventListener('click', function (event) {
    // Empêcher le comportement par défaut du bouton (soumission du formulaire et rafraîchissement de la page)
    event.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
        firstName: getValue('first-name'),
        lastName: getValue('last-name'),
        email: getValue('email'),
        phone: getValue('phone'),
        address: getValue('address'),
        objective: getValue('objective'), // Ajouter cette ligne pour récupérer l'objectif professionnel
        experience: getValue('experience'), // Ajouter cette ligne pour récupérer l'expérience professionnelle
        education: getValue('education'), // Ajouter cette ligne pour récupérer la formation académique
        skills: getValue('skills'), // Ajouter cette ligne pour récupérer les compétences
        achievements: getValue('achievements'), // Ajouter cette ligne pour récupérer les réalisations
        languages: getValue('languages'), // Ajouter cette ligne pour récupérer les langues
        interests: getValue('interests'), // Ajouter cette ligne pour récupérer les centres d'intérêt
        references: getValue('references') // Ajouter cette ligne pour récupérer les références
    };

    // Vérifier si tous les champs sont remplis
    const isFormValid = validateForm(formData);

    // Si le formulaire est valide, générer le CV
    if (isFormValid) {
        generateCV(formData);
    }
});

// Fonction pour récupérer la valeur d'un champ de formulaire par son ID
function getValue(id) {
    return document.getElementById(id).value;
}

// Fonction pour valider le formulaire
function validateForm(formData) {
    const { firstName, lastName, email, phone, address } = formData;
    // Vérifier si tous les champs sont remplis
    if (!firstName || !lastName || !email || !phone || !address) {
        // Afficher une alerte d'erreur si un champ est vide
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Veuillez remplir tous les champs.',
        });
        return false; // Retourner false si le formulaire n'est pas valide
    }
    return true; // Retourner true si le formulaire est valide
}

// Fonction pour générer le CV
function generateCV(formData) {
    const { firstName, lastName, email, phone, address, objective, experience, education, skills, achievements, languages, interests, references } = formData;
    // Sélectionner l'élément où afficher le CV généré
    const cvOutput = document.getElementById('cv-output');
    // Générer le contenu HTML du CV en utilisant les données du formulaire
    cvOutput.innerHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <h4>Objectif professionnel:</h4>
        <p>${objective}</p>
        <h4>Expérience professionnelle:</h4>
        <p>${experience}</p>
        <h4>Formation académique:</h4>
        <p>${education}</p>
        <h4>Compétences:</h4>
        <p>${skills}</p>
        <h4>Réalisations:</h4>
        <p>${achievements}</p>
        <h4>Langues:</h4>
        <p>${languages}</p>
        <h4>Centres d'intérêt:</h4>
        <p>${interests}</p>
        <h4>Références:</h4>
        <p>${references}</p>
    `;
}

