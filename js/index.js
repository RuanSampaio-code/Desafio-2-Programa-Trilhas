document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            welcomeMessage: "Welcome to the technology training program of the Government of Maranhão! An initiative of SECTI in partnership with FAPEMA to train young people and adults in the field of technology.",
            startRegistration: "Start Registration"
        },
        pt: {
            welcomeMessage: "Bem-vindo ao programa de formação em tecnologia do Governo do Maranhão! Uma iniciativa da SECTI em parceria com a FAPEMA para capacitar jovens e adultos na área de tecnologia.",
            startRegistration: "Iniciar Inscrição"
        }
    };

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[selectedLanguage][key];
        });
    });

    // Set initial language based on the default selected option
    const initialLanguage = languageSelect.value;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[initialLanguage][key];
    });

    const toggleSwitch = document.getElementById('darkModeToggle');
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});