function mostrarSurpresa() {
  const surpresa = document.getElementById("surpresa");
  surpresa.classList.remove("escondido");

  const musica = document.getElementById("musica");
  musica.play();

  criarCoracoes();
}

function criarCoracoes() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }
}
