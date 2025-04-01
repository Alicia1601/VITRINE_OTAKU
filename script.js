// Fonction pour l'effet de frappe (typing effect)
function typingEffect(element, text, speed) {
    element.innerHTML = ''; // Réinitialise le contenu pour éviter l'accumulation
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Fonction pour changer l'image, le nom et la citation dans une zone dédiée (facultatif)
function changeCharacterInfo(imageSrc, name, quote) {
    const characterImage = document.getElementById('character-image');
    const characterName = document.getElementById('character-name');
    const characterQuote = document.getElementById('character-quote');

    if (characterImage && characterName && characterQuote) {
        characterImage.src = imageSrc;
        characterName.textContent = name;
        characterQuote.textContent = `"${quote}"`; // Ajout des guillemets pour style
    }
}

// Attendre que le DOM soit complètement chargé avant de lancer les effets
document.addEventListener("DOMContentLoaded", function () {
    // Applique l'effet de frappe au titre dans .welcome-container
    const welcomeTitle = document.querySelector('.welcome-container h1');
    if (welcomeTitle) {
        const pageTitle = welcomeTitle.textContent; // Récupère le titre existant ("Savants Fous", "Génies Légendaires", etc.)
        typingEffect(welcomeTitle, pageTitle, 100);
    }

    // Gestion des boutons WhatsApp
    const buttons = document.querySelectorAll('.choose-design');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Récupérer les données du design depuis l'attribut data-design
            const designData = JSON.parse(button.parentElement.getAttribute('data-design'));
            const designName = designData.name;

            // Numéro WhatsApp
            const phoneNumber = "+22891412003";
            const message = `Bonjour, nous voudrions personnaliser un article avec le design : ${designName}.`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Redirection vers WhatsApp
            window.location.href = whatsappUrl;
        });
    });

    // Interaction dynamique avec les personnages (optionnel)
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.addEventListener('click', () => {
            const imageSrc = character.querySelector('img').src;
            const name = character.querySelector('h3').textContent;
            const quote = character.querySelector('.quote').textContent;
            changeCharacterInfo(imageSrc, name, quote);
        });
    });
});