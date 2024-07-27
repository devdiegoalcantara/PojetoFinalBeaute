document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;

   
    const dadosCadastro = JSON.parse(localStorage.getItem("cadastro"));

    if (dadosCadastro && dadosCadastro.email === email && dadosCadastro.password === password) {
        const nome = dadosCadastro.nome.split(' ')[0];
        alert(`Olá! Que bom que você voltou ${nome}.`);
      window.location.href = "../index.html";
    } else {
      document.getElementById("login-message").textContent = "E-mail ou senha inválidos. Por favor, tente novamente.";
    }
  });