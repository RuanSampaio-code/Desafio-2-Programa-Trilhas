document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            welcomeMessage: "Welcome to the Trilhas program, an initiative by SECTI and FAPEMA to train young people and adults in the technology field.",
            startRegistration: "Start Registration"
        },
        pt: {
            welcomeMessage: "Bem-vindo ao programa Trilhas, uma iniciativa da SECTI e FAPEMA para capacitar jovens e adultos na área de tecnologia.",
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
    const currentMode = localStorage.getItem('darkMode');

    if (currentMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});