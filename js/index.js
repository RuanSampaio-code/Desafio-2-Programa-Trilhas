const translations = {
    en: {
        startRegistration: "Start Registration"
    },
    pt: {
        startRegistration: "Iniciar Inscrição"
    }
};

const toggleSwitch = document.getElementById('darkModeToggle');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[selectedLanguage][key];
    });
});