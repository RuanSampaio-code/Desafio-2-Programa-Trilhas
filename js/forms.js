document.addEventListener('DOMContentLoaded', () => {
  //Controle de varaiáveis de idiomas
  const translations = {
    en: {
      backButton: "Back",
      formTitle: "Registration Form",
      formSubtitle: "Fill in the details below to register for the Trilhas Program.",
      participantInfo: "Participant Information",
      fullName: "Full Name",
      birthDate: "Date of Birth",
      cpf: "CPF",
      gender: "Gender",
      female: "Female",
      male: "Male",
      other: "Other",
      preferNotToSay: "Prefer not to say",
      email: "Email",
      phone: "Phone",
      identityDocument: "Identity Document",
      clickToSelect: "Click here to select the file",
      residentialAddress: "Residential Address",
      zipCode: "ZIP Code",
      street: "Street",
      number: "Number",
      city: "City",
      state: "State",
      residenceProof: "Proof of Residence",
      learningTracks: "Learning Tracks",
      selectOneTrack: "Select only one track",
      frontend: "Front-end Programming",
      backend: "Back-end Programming",
      gameProgramming: "Game Programming",
      designExperience: "Design and Experience",
      dataScience: "Data Science",
      termsConditions: "I declare that I have read and agree with the Terms and Conditions and the Privacy Policy.",
      cancel: "Cancel",
      submit: "Submit"
    },
    pt: {
      backButton: "Voltar",
      formTitle: "Formulário de inscrição",
      formSubtitle: "Preencha os dados abaixo para fazer sua inscrição no Programa Trilhas.",
      participantInfo: "Informações do participante",
      fullName: "Nome completo",
      birthDate: "Data de nascimento",
      cpf: "CPF",
      gender: "Sexo",
      female: "Feminino",
      male: "Masculino",
      other: "Outro",
      preferNotToSay: "Prefiro não informar",
      email: "E-mail",
      phone: "Telefone",
      identityDocument: "Documento de identidade",
      clickToSelect: "Clique aqui para selecionar o arquivo",
      residentialAddress: "Endereço residencial",
      zipCode: "CEP",
      street: "Rua",
      number: "Número",
      city: "Cidade",
      state: "Estado",
      residenceProof: "Comprovante de residência",
      learningTracks: "Trilhas de apredizagem",
      selectOneTrack: "Selecione apenas uma trilha",
      frontend: "Programação Front-end",
      backend: "Programação Back-end",
      gameProgramming: "Programação de Jogos",
      designExperience: "Design e Experiência",
      dataScience: "Ciência de Dados",
      termsConditions: "Declaro que li e concordo com os Termos e Condições e com a Política de Privacidade.",
      cancel: "Cancelar",
      submit: "Fazer inscrição"
    }
  };
  //Inicilizas as funções
  functionDarkMode();
  functionLanguageSelector(translations);
  functionFormValidation();
});

//Função para ativar o modo escuro
function functionDarkMode() {
  const toggleSwitch = document.getElementById('darkModeToggle');
  const currentMode = localStorage.getItem('darkMode');
  
  if (currentMode === 'enabled') {
      document.body.classList.add('dark-mode');
      toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode', toggleSwitch.checked);
      localStorage.setItem('darkMode', toggleSwitch.checked ? 'enabled' : 'disabled');
  });
}

//Função para selecionar o idioma
function functionLanguageSelector(translations) {
  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', (event) => {
      updateTranslations(event.target.value, translations);
  });
  updateTranslations(languageSelect.value, translations);
}

//Função para atualizar as traduções
function updateTranslations(language, translations) {
  document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key];
  });
}

//Função para validar o formulário
function functionFormValidation() {
  document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = ['nome', 'dataNascimento', 'cpf', 'email', 'telefone'];
      const allFilled = requiredFields.every(id => document.getElementById(id).value.trim() !== '');
      const termsAccepted = document.getElementById('termos').checked;

      if (allFilled && termsAccepted) {
          window.location.href = 'success.html';
      } else {
          alert('Por favor, preencha todos os campos obrigatórios e aceite os termos e condições.');
      }
  });
}


