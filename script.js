const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function () {
    // Récupérer les données du formulaire
    const formData = {
        firstName: getValue('first-name'),
        lastName: getValue('last-name'),
        email: getValue('email'),
        phone: getValue('phone'),
        address: getValue('address'),
        summary: getValue('summary')
    };

    // Vérifier si tous les champs sont remplis
    const isFormValid = validateForm(formData);

    if (isFormValid) {
        // Générer le CV
        generateCV(formData);
    }
});

function getValue(id) {
    return document.getElementById(id).value;
}

function validateForm(formData) {
    const { firstName, lastName, email, phone, address, summary } = formData;
    if (!firstName || !lastName || !email || !phone || !address || !summary) {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Veuillez remplir tous les champs.',
        });
        return false;
    }
    return true;
}

function generateCV(formData) {
    const { firstName, lastName, email, phone, address, summary } = formData;
    const cvOutput = document.getElementById('cv-output');
    cvOutput.innerHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <h4>Résumé</h4>
        <p>${summary}</p>
    `;
}
