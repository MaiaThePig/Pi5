submitButton.addEventListener("click", async event => {
  event.preventDefault(); // Previne o envio padrão do formulário

  const data = {
    username: user.value,
    email: email.value,
    password: pwd.value
  };

  if (!validInput(user.value, email.value, pwd.value)) {
    return;
  }

  const res = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const resData = await res.json();

  if (resData.ok) {
    return location.replace("/home");
  } else {
    alert(resData.message || "Erro ao registrar. Tente novamente.");
  }
  function validInput(user, email, pwd) {
    if (user.length <= 3) {
      alert("Nome de usuário deve ter mais de 3 caracteres");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("E-mail inválido");
      return false;
    }
    if (pwd.length <= 3) {
      alert("Senha deve ter mais de 3 caracteres");
      return false;
    }
    return true;
  }
  if (!resData.ok) {
    alert(resData.message || "Erro ao registrar. Tente novamente.");
    return;
  }
});