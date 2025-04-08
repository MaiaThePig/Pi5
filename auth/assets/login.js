const email = document.querySelector("#email");
const pwd = document.querySelector("#password");

const submitButton = document.querySelector("#submit");

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Lógica de autenticação
  if (email === "teste@formatbot.com" && password === "123456") {
    return res.json({ ok: true, message: "Login bem-sucedido" });
  }

  res.json({ ok: false, message: "E-mail ou senha inválidos" });
}); //eu

submitButton.addEventListener("click", async _ =>{
  const data = {
    email: email.value,
    password: pwd.value
  }; 

  submitButton.addEventListener("click", async event => {
    event.preventDefault();
  
    if (!email.value || !pwd.value) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const data = {
      email: email.value,
      password: pwd.value
    };
  
  })

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const resData = await res.json();

  if(!resData.ok){
    alert(resData.message);
    return;
  }

  location.replace("/home");
})
submitButton.addEventListener("click", async event => {
  event.preventDefault(); 

})

location.replace("/home");