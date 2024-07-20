document.getElementById("samukaroll").addEventListener("click", () => {
  const dado = document.getElementById("samukadice").value;
  const result = document.getElementById("result");
  const audio = document.getElementById('samukaaudio');
  audio.play().catch((error) => {
      console.log('Reprodução automática bloqueada, interação do usuário é necessária.');
  });
  console.log(dado);
  if (!Number.isNaN(dado)) {
    const numRolled = Math.floor(Math.random() * dado) + 1
    result.value = numRolled;
  }
})