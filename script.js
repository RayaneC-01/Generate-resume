const generateBtn = document.getElementById('generate-btn')
generateBtn.addEventListener('click', function () {
    // Récupérer les données du formulaire
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;

    // Générer le CV
    const cvOutput = document.getElementById('cv-output');
    cvOutput.innerHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <h4>Résumé</h4>
        <p>${summary}</p>
    `;
});
