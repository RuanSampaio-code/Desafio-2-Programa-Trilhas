document.addEventListener('DOMContentLoaded', () => {
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

  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      element.textContent = translations[selectedLanguage][translationKey];
    });
  });

  const initialLanguage = languageSelect.value;
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    element.textContent = translations[initialLanguage][translationKey];
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Verifique se todos os campos obrigatórios estão preenchidos
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const termos = document.getElementById('termos').checked;

    if (nome && dataNascimento && cpf && email && telefone && termos) {
      // Redirecione para a página de sucesso
      window.location.href = 'success.html';
    } else {
      alert('Por favor, preencha todos os campos obrigatórios e aceite os termos e condições.');
    }
  });
});